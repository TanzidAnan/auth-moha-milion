import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Signup = () => {
    const {creatUser} =useContext(AuthContext)
    const hendleResister =(e) =>{
        e.preventDefault()
        const name =e.target.name.value;
        const email =e.target.email.value;
        const password =e.target.password.value;

        console.log(name,email,password)
        creatUser(email,password)
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero bg-red-100 min-h-[80vh]">
            <div className="hero-content flex-col  w-[100%] ">
                <div className="text-center lg:text-left w-[20%]">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-[50%] max-w-4xl shrink-0 shadow-2xl">
                    <form onSubmit={hendleResister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='my-6 mx-4 text-center'>Already have an Accoutnt <Link className='text-purple-400' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;