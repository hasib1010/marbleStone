import { useState, useContext, useRef } from 'react';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/Provider';
import Navbar2 from '../../Navbar/Navbar2';
import { storage } from '../../Services/firebase.config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const ProfileDashboard = () => {
    const { user } = useContext(AuthContext);
    const [uploading, setUploading] = useState(false);
    const [imgUrl, setImgUrl] = useState(user.photoURL || ''); // Initialize with current photoURL
    const [image, setImage] = useState(null);
    const [editingName, setEditingName] = useState(false); // Track if name is being edited
    const [newName, setNewName] = useState(user.displayName || ''); // Track the new name
    const fileInputRef = useRef(null); // Create a ref for the file input

    const identity = user.email;

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile);
    };

    const handleImageUpload = async () => {
        if (image) {
            setUploading(true);
            const imgRef = ref(storage, `profilePictures/${identity}`);
            try {
                await uploadBytes(imgRef, image);
                const url = await getDownloadURL(imgRef);
                setImgUrl(url); // Update the image URL state
                await updateProfile(user, { photoURL: url });
                alert("Profile picture updated");
                if (fileInputRef.current) {
                    fileInputRef.current.value = ''; // Reset the file input field
                }
            } catch (error) {
                console.error("Error uploading image: ", error);
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
                alert("Name updated successfully");
                setEditingName(false);
            } catch (error) {
                console.error("Error updating name: ", error);
            }
        } else {
            setEditingName(false);
        }
    };

    return (
        <div className='container mx-auto min-h-screen'>
            <Navbar2 />
            <h5 className='text-5xl font-medium text-green-800 text-center my-10'>Profile Dashboard</h5>
            <div className="w-fit mx-auto mt-44">
                <div className='my-10 flex flex-col gap-5 items-start'>
                    <h4>Name:</h4>
                    {editingName ? (
                        <div className='flex items-center gap-4'>
                            <input 
                                type="text" 
                                value={newName} 
                                onChange={handleNameChange} 
                                className='input input-bordered' 
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
                            <h3 className='text-4xl font-medium'>{user.displayName}</h3>
                            <button onClick={() => setEditingName(true)} className='link text-blue-600'>
                                Edit
                            </button>
                        </div>
                    )}
                </div>
                <h4>Update your image:</h4>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="file:mr-4 file:py-2 file:px-4 file:border-none file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-200 cursor-pointer"
                    ref={fileInputRef} // Attach the ref to the file input
                />
                {uploading && (
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Upload Progress</span>
                        </label>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" />
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{/* Progress percentage if available */}</p>
                    </div>
                )}
                <button onClick={handleImageUpload} className="btn btn-primary mt-4">
                    {uploading ? 'Uploading...' : 'Upload Photo'}
                </button>
            </div>
        </div>
    );
};

export default ProfileDashboard;
