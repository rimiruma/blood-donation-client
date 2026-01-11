import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import Lottie from 'lottie-react';
import loginLottieJSON from '../../assets/lottie/login.json';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
    const navigate = useNavigate();
    const { singIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false); // password toggle

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                Swal.fire({
                    title: "User Login Successful",
                    icon: "success",
                    showClass: { popup: `animate__animated animate__fadeInUp animate__faster` },
                    hideClass: { popup: `animate__animated animate__fadeOutDown animate__faster` }
                });
                navigate('/dashboard');
            })
            .catch(err => {
                Swal.fire({
                    title: "Login Failed",
                    text: err.message,
                    icon: "error"
                });
            });
    };

    const handleDemoLogin = (type) => {
        let credentials = { email: '', password: '' };
        if (type === 'user') {
            credentials = { email: 'user@example.com', password: 'user123' };
        } else if (type === 'admin') {
            credentials = { email: 'admin@example.com', password: 'admin123' };
        }
        singIn(credentials.email, credentials.password)
            .then(() => {
                Swal.fire({
                    title: `${type.toUpperCase()} Login Successful`,
                    icon: "success"
                });
                navigate('/dashboard');
            });
    };

    return (
        <div className="flex flex-col lg:flex-row py-20 items-center justify-center min-h-screen gap-10 bg-gradient-to-r from-red-100 to-red-200 dark:from-gray-900 dark:to-gray-800 transition-colors px-4">
            
            {/* Login Card */}
            <div className="card bg-white dark:bg-gray-800 shadow-xl rounded-xl w-full max-w-md p-6 animate__animated animate__fadeInLeft">
                <h1 className="text-4xl font-bold text-center text-red-600 mb-2">Login Now!</h1>
                <p className="text-center text-gray-500 mb-6">Access your account to manage donations</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" required />
                    </div>

                    {/* Password Input with Eye Icon */}
                    <div className="form-control relative">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder="Password"
                            className="input input-bordered w-full pr-10"
                            required
                        />
                        {/* Eye Icon */}
                        <span
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-red-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                        </span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-red-500">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-4">
                        <input type="submit" className="btn w-full bg-red-600 hover:bg-red-700 text-white" value="Login" />
                    </div>
                </form>

                {/* Demo Buttons Side by Side */}
                <div className="mt-4 flex gap-3 justify-center">
                    <button
                        onClick={() => handleDemoLogin('user')}
                        className="btn btn-sm btn-outline text-green-500 hover:bg-red-500 hover:text-white transition"
                    >
                        Demo User
                    </button>
                    <button
                        onClick={() => handleDemoLogin('admin')}
                        className="btn btn-sm btn-outline text-orange-500 hover:bg-red-500 hover:text-white transition"
                    >
                        Demo Admin
                    </button>
                </div>

                {/* Register Link */}
                <p className="mt-6 text-center text-gray-500">
                    New Here? <Link to="/register" className="text-red-600 font-semibold">Create an account</Link>
                </p>
            </div>

            {/* Animation Section */}
            <div className="w-full max-w-lg animate__animated animate__fadeInRight">
                <Lottie animationData={loginLottieJSON} loop={true} />
            </div>

        </div>
    );
};

export default Login;
