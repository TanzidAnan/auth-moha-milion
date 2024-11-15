import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    
    const {signinUser,googleLogin} =useContext(AuthContext);
    const naveget =useNavigate()

    const hendleLogin =(e) =>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password)

        signinUser(email,password)
        .then(res =>{
            console.log(res.user)
            e.target.reset()
            naveget('/')
        })
        .catch(error =>{
            console.log(error.message)
        })

    }

    const hendleGoogleLogin =() =>{
        googleLogin()
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="hero bg-red-100 min-h-[80vh]">
                <div className="hero-content flex-col  w-[100%] ">
                    <div className="text-center lg:text-left w-[20%]">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-[50%] max-w-4xl shrink-0 shadow-2xl">
                        <form onSubmit={hendleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='flex justify-center gap-5'>
                                <button onClick={hendleGoogleLogin} className='btn bg-orange-400'>Google</button>
                                <button className='btn bg-orange-200'>gitHub</button>
                            </div>
                        </form>
                        <p className='my-6 mx-4 text-center'>New to this Website <Link className='text-purple-400' to='/resister'>Resister</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;