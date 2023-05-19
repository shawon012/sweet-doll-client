import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Signup = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        console.log(displayName)
        const photoURL = event.target.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password || !photoURL || !displayName) {
            setError('Please fill in all fields.');
            return;
        }


        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        createUser(email, password, photoURL, displayName)


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">SignUp now!</h1>
                    <p className="py-6">Discover a world of enchanting dolls. Sign in to our doll shop and unlock a realm of imagination and joy. Join us today to bring smiles and create cherished memories with our exquisite collection.</p>
                </div>
                <form onSubmit={handleSignin} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                        </div>
                        <div>
                            <p><small>Already Registered? Please <Link to='/login'>Login!</Link></small></p>
                            {error && <p className='text-danger'>{error}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">SignUp</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;