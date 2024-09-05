import { useState, useContext, useRef, useEffect } from 'react';
import { deleteUser, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/Provider';
import { storage } from '../../Services/firebase.config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import DashboardNav from '../DashboardNav/DashboardNav';
import AdminSidebar from '../AdminSidebar';
import { FaCamera } from 'react-icons/fa'; // Icon for the edit button
import { toast, ToastContainer } from 'react-toastify'; // Toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import Swal from 'sweetalert2';

const ProfileDashboard = () => {
    const { user } = useContext(AuthContext);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(user.photoURL || 'https://i.ibb.co/dpGJZDt/avatar.webp');
    const [editingName, setEditingName] = useState(false);
    const [newName, setNewName] = useState(user.displayName || '');
    const fileInputRef = useRef(null);
    const [currentUserId, setCurrentUserId] = useState([]);
    const identity = user.email;
    console.log(user);

    const handleDeleteUser = async () => {
        // Show confirmation dialog
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        // If the user confirmed
        if (result.isConfirmed) {
            try {
                // Delete the user from Firebase
                await deleteUser(user);

                // Send a delete request to your backend
                const response = await fetch(`http://localhost:5001/users/${currentUserId}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data.acknowledged) {
                    // Show success message and redirect
                    await Swal.fire({
                        title: "Deleted!",
                        text: "Your profile has been deleted.",
                        icon: "success"
                    });

                    // Redirect user or log out
                    window.location.href = '/'; // Redirect to home or login page
                } else {
                    // Handle case where deletion is not acknowledged
                    throw new Error("Failed to delete user from backend.");
                }
            } catch (error) {
                // Handle errors
                console.error("Error deleting user:", error);
                await Swal.fire({
                    title: "Error!",
                    text: "An error occurred while deleting your profile. Please try again.",
                    icon: "error"
                });
            }
        }
    };


    useEffect(() => {
        fetch(`http://localhost:5001/users/email/${identity}`)
            .then(res => res.json())
            .then(data => setCurrentUserId(data._id))
            .catch(error => console.error('Error fetching user ID:', error));
    }, [identity]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setImage(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
        }
    };

    const handleImageUpload = async () => {
        if (image) {
            setUploading(true);
            const imgRef = ref(storage, `profilePictures/${user.uid}`);
            try {
                await uploadBytes(imgRef, image);
                const url = await getDownloadURL(imgRef);

                await updateProfile(user, { photoURL: url });

                const response = await fetch(`http://localhost:5001/users/${currentUserId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ profilePictureURL: url }),
                });

                if (response.ok) {
                    setPreviewUrl(url);
                    toast.success("Profile picture updated successfully!");
                } else {
                    const error = await response.json();
                    console.error('Error updating profile picture:', error);
                    toast.error("Failed to update profile picture.");
                }

                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } catch (error) {
                console.error("Error uploading image: ", error);
                toast.error("Error uploading image.");
            } finally {
                setUploading(false);
            }
        }
    };

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleNameUpdate = async () => {
        if (newName !== user.displayName) {
            try {
                await updateProfile(user, { displayName: newName });
                setEditingName(false);

                const response = await fetch(`http://localhost:5001/users/${currentUserId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: newName }),
                });

                if (response.ok) {
                    toast.success("Profile name updated successfully!");
                } else {
                    const error = await response.json();
                    console.error('Error updating profile name:', error);
                    toast.error("Failed to update profile name.");
                }
            } catch (error) {
                console.error("Error updating name: ", error);
                toast.error("Error updating profile name.");
            }
        } else {
            setEditingName(false);
        }
    };

    return (
        <div className='flex min-h-screen w-full bg-gray-100'>
            <AdminSidebar />
            <div className='flex-1 flex flex-col'>
                <DashboardNav />
                <div className='container mx-auto  '>
                    <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Profile Dashboard</h1>
                    <div className='bg-white shadow-md rounded-lg p-6'>
                        <div className='mb-6 flex flex-col w-fit mx-auto items-center'>
                            <div className='relative mb-4'>
                                <img
                                    src={
                                        previewUrl || user.photoURL  
                                    }
                                    alt="Profile"
                                    className='w-32 h-32 rounded-full object-cover'
                                />
                                <label className='absolute bottom-0 right-0 p-2 bg-gray-800 text-white rounded-full cursor-pointer'>
                                    <FaCamera />
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="sr-only"
                                        ref={fileInputRef}
                                    />
                                </label>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-700 mb-2'>Name:</h2>
                                {editingName ? (
                                    <div className='flex items-center gap-4'>
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={handleNameChange}
                                            className='input input-bordered w-full'
                                        />
                                        <button onClick={handleNameUpdate} className='btn btn-primary'>
                                            Save
                                        </button>
                                        <button onClick={() => setEditingName(false)} className='btn btn-secondary'>
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className='flex items-center gap-4'>
                                        <h3 className='text-2xl font-medium'>{user.displayName}</h3>
                                        <button onClick={() => setEditingName(true)} className='text-blue-600 hover:underline'>
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='w-fit mx-auto'>
                            <h2 className='hidden text-xl font-semibold text-gray-700 mb-2'>Update Your Image:</h2>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden file:mr-4 file:py-2 file:px-4 file:border-none file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-200"
                                ref={fileInputRef}
                            />
                            {uploading && (
                                <div className="mt-4">
                                    <p className="text-gray-600 mb-2">Updating..</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-blue-600 h-2.5 rounded-full transition-all" />
                                    </div>
                                </div>
                            )}
                            <button onClick={handleImageUpload} className="btn btn-primary mt-4">
                                {uploading ? 'Uploading...' : 'Update'}
                            </button>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleDeleteUser} className='text-red-600 underline mt-10'>Delete Your Account</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ProfileDashboard;
