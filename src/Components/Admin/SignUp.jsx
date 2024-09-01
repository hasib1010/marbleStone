import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import axios from 'axios';
import { AuthContext } from '../Providers/Provider';
import { updateProfile } from 'firebase/auth';
import auth from '../Services/firebase.config';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadImage = async (photo) => {
        try {
            const imgBBFormData = new FormData();
            imgBBFormData.append('image', photo);
            const imgBBResponse = await axios.post('https://api.imgbb.com/1/upload', imgBBFormData, {
                params: {
                    key: '82ff77cd3e7d27c63fdaf8824d1d2d3e'
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return imgBBResponse.data.data.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null; // Return null if there's an error
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = file;

        let imageBbUrl = '';

        if (photo) {
            imageBbUrl = await uploadImage(photo);
        }

        try { 
            const userCredential = await createUser(email, password);
            const user = userCredential.user;

            // Update the user's profile
            await updateProfile(user, {
                displayName: name,
                photoURL: imageBbUrl,
            });
            console.log(user);

            alert('User created and profile updated successfully');
        } catch (error) {
            console.error('Error creating user or updating profile:', error);
        }
    };

    return (
        <div className='container mx-auto'>
            <Navbar2 />
            <h5 className='text-5xl font-medium text-green-800 text-center my-10'>Sign Up</h5>
            <form onSubmit={handleRegister} className="w-2/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        name='photo'
                        type="file"
                        required
                        className="file:mr-4 file:py-2 file:px-4 file:border-none file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-200 cursor-pointer "
                        onChange={handleFileChange}
                    />
                </div>

                <div className="form-control mt-6 mb-5">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <p className='mb-5'>Already have an account? please <Link className='text-red-600' to={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
