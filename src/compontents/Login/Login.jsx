import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="hero bg-red-100 min-h-[80vh]">
                <div className="hero-content flex-col  w-[100%] ">
                    <div className="text-center lg:text-left w-[20%]">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-[50%] max-w-4xl shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;