import { useState, useContext } from 'react';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/Provider';
import Navbar2 from '../../Navbar/Navbar2';
import { storage } from '../../Services/firebase.config';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';


const ProfileDashboard = () => {
    const { user } = useContext(AuthContext);
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState('')


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile);
    };
    const handleImageUpload = () => {
        const imgRef = ref(storage, `files/${v4()}`)
        uploadBytes(imgRef, image)
    }
    // const handleImageUpload = async (e) => {
    //     e.preventDefault();

    //     if (!file) {
    //         console.error('No file selected');
    //         return;
    //     }

    //     setUploading(true);

    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         const response = await fetch("gs://marblestone-5872a.appspot.com", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         const data = await response.json();
    //         console.log(data.data);

    //         updateProfile(user,{
    //             // photoURL: 
    //         })
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Upload failed:', error);
    //     } finally {
    //         setUploading(false);
    //     }
    // };

    return (
        <div className='container mx-auto'>
            <Navbar2 />
            <h5 className='text-5xl font-medium text-green-800 text-center my-10'>Profile Dashboard</h5>
            <div className="w-2/4 mx-auto">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="file:mr-4 file:py-2 file:px-4 file:border-none file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-200 cursor-pointer"
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
