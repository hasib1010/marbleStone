import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import { AuthContext } from '../Providers/Provider';

function Login() {
    
    const { logIn } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then((userCredential) => {
              
                const user = userCredential.user;
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                
            });

    }
    return (
        <div className='container mx-auto mb-20'>
            <Navbar2></Navbar2>
            <h5 className='text-5xl font-medium text-green-800 text-center my-10'>Log in</h5>
            <form onSubmit={handleLogin} className="w-2/4  mx-auto ">
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
                <p className='mb-5'>Don't have an account? please <Link className='text-red-600 ' to={'/register'}>Register</Link></p>
            </form>
        </div>
    )
}

export default Login;