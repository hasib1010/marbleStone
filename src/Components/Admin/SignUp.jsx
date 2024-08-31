import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import axios from 'axios';

const SignUp = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = file;

        if (photo) {
            try {
                // Create form data for ImgBB
                const imgBBFormData = new FormData();
                imgBBFormData.append('image', photo);

                // Upload image to ImgBB
                const imgBBResponse = await axios.post('https://api.imgbb.com/1/upload', imgBBFormData, {
                    params: {
                        key: '82ff77cd3e7d27c63fdaf8824d1d2d3e'
                    },
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const photoUrl = imgBBResponse.data.data.url;


                console.log(email, password, name, photoUrl);

            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            // Handle case where no image is provided
            console.log(email, password, name, 'No photo uploaded');
        }
    };

    return (
        <div>
            <Navbar2 />
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
                        className="file:mr-4 file:py-2 file:px-4 file:border-none file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 file:cursor-pointer hover:file:bg-gray-200 cursor-pointer "
                        onChange={handleFileChange}
                    />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <p>Already have an account? please <Link className='text-red-600' to={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;
