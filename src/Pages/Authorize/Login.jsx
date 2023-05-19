import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password ) {
            setError('Please fill up all fields.');
            return;
        }

        signIn(email, password)
    }
    return (
        <div className="hero pb-20 pt-5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-5">
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                       
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
                        
                        <div>
                            <p><small>Are You A New User? Please <Link to='/signUp'>SignUp Now!</Link></small></p>
                            {error && <p className='text-danger'>{error}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">LogIn</button>
                        </div>
                    </div>
                </form>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">LogIn Now!</h1>
                    <p className="py-6">Unlock a world of magical wonders by logging into our doll shop. Embark on a delightful journey filled with exquisite dolls, enchanting accessories, and endless imagination. Join our community today and experience the joy of bringing dreams to life through our enchanting collection</p>
                </div>
            </div>
        </div>
    );
};

export default Login;