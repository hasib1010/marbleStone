import { useContext, useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { AuthContext } from '../Providers/Provider';
import { updateProfile } from 'firebase/auth';
import { auth, storage } from '../Services/firebase.config';
import RedirectIfLoggedIn from './RedirectIfLoggedIn';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [registering, setRegistering] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        setRegistering(true);
        setError(null);

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const profilePictureURL = "";
        const userData = { email, name, profilePictureURL };

        try {
            const userCredential = await createUser(email, password);

            const user = userCredential.user;


            await updateProfile(user, { displayName: name });

            alert('Welcome');

            fetch("http://localhost:5001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => console.log(data))
                .catch(error => {
                    console.error('Error:', error);
                    setError('Failed to create user data on the server.');
                });
            navigate('/admin/profile_dashboard')
        } catch (error) {
            console.error('Error creating user or updating profile:', error);
            if (error.message.includes('auth/')) {

                const errorCode = error.message.split('/')[1];
                switch (errorCode) {
                    case 'email-already-in-use':
                        setError('This email address is already in use.');
                        break;
                    case 'invalid-email':
                        setError('The email address is invalid.');
                        break;
                    case 'weak-password':
                        setError('The password is too weak.');
                        break;
                    default:
                        setError('An unknown error occurred.');
                        break;
                }
            } else {
                setError('An unknown error occurred.');
            }
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

                    {error && <p className='text-red-600 mb-4'>{error}</p>} {/* Display error message */}

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
