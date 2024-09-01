import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { AuthContext } from '../Providers/Provider';
import { updateProfile } from 'firebase/auth';
import {auth, storage } from '../Services/firebase.config'; // Ensure this is correctly configured
import RedirectIfLoggedIn from './RedirectIfLoggedIn';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [registering, setRegistering] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegistering(true);

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');

        try {
            const userCredential = await createUser(email, password);
            const user = userCredential.user;

            // Update the user's profile without a photo
            const updatedUser = await updateProfile(user, {
                displayName: name,
            });
            console.log(updatedUser);

            alert('User created and profile updated successfully');
            
        } catch (error) {
            console.error('Error creating user or updating profile:', error);
            alert('Error creating user or updating profile');
        } finally {
            setRegistering(false);
        }
    };

    return (
        <RedirectIfLoggedIn>
            <div className='container mx-auto'>
                <Navbar2 />
                <h5 className='text-5xl font-medium text-green-800 text-center my-10'>Sign Up</h5>
                <form onSubmit={handleRegister} className="lg:w-2/4 mx-auto">
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
                    
                    <div className="form-control mt-6 mb-5">
                        <button className="btn btn-primary" type="submit" disabled={registering}>
                            {registering ? 'Registering...' : 'Sign Up'}
                        </button>
                    </div>
                    <p className='mb-5'>
                        Already have an account? Please <Link className='text-red-600' to={'/login'}>Login</Link>
                    </p>
                </form>
            </div>
        </RedirectIfLoggedIn>
    );
};

export default SignUp;
