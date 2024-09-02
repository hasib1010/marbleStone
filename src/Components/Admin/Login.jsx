import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { AuthContext } from '../Providers/Provider';
import RedirectIfLoggedIn from './RedirectIfLoggedIn'; 

function Login() {
    const { logIn } = useContext(AuthContext);
    const [error, setError] = useState(''); // State to store error message
    const location = useLocation(); // Get current location
    const navigate = useNavigate(); // Get navigate function
    const from = location.state?.from?.pathname || '/'; // Default to home if no state

    useEffect(() => {
        let timer;
        if (error) {
            timer = setTimeout(() => {
                setError(''); // Clear error after 5 seconds
            }, 5000);
        }
        return () => clearTimeout(timer); // Clean up timer if component unmounts or error changes
    }, [error]);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((userCredential) => {
                // Redirect to the original page or home page
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setError("Invalid email or password"); // Update state with error message
            });
    };

    return (
        <RedirectIfLoggedIn>
            <div className='container mx-auto mb-20'>
                <Navbar2 />
                <h5 className='text-5xl font-medium text-green-800 text-center my-10'>Log in</h5>
                <form onSubmit={handleLogin} className="w-2/4 mx-auto">
                    {/* Error message container */}
                    <div className={`transition-opacity duration-1000 ${error ? 'opacity-100' : 'opacity-0'} h-12 overflow-hidden`}>
                        {error && (
                            <div className="bg-red-500 text-white px-4 py-3 rounded-md mb-4">
                                <div className="flex items-center">
                                    <span className="mr-2">⚠️</span>
                                    <p>{error}</p>
                                </div>
                            </div>
                        )}
                    </div>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 mb-5">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className='mb-5'>
                        Don't have an account? Please <Link className='text-red-600' to={'/register'}>Register</Link>
                    </p>
                </form>
            </div>
        </RedirectIfLoggedIn>
    );
}

export default Login;
