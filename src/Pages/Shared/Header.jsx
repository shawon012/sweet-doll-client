import React, { useContext } from 'react';
import unicorn from '../../assets/unicorn.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
const Header = () => {
    const { user } = useContext(AuthContext);
    console.log('users name', user?.displayName, user?.photoURL )
    return (
        <div className="navbar  flex justify-between align-middle pl-11 pr-11 bg-red-100">
            <div >
                <div ><img className='h-16 w-full' src={unicorn} alt="" /></div>
                <div><a className="btn btn-ghost normal-case text-xl">UToy</a></div>
            </div>
            <div className='gap-3'>
                <Link to='/'><div className="btn btn-ghost normal-case text-xl"><h3>Home</h3></div></Link>
                <Link to='/products'><div className="btn btn-ghost normal-case text-xl"><h3>All Toys</h3></div></Link>
                {user ?
                    (
                    <div className='gap-3'>
                        <Link to='/mytoys'><div className="btn btn-ghost normal-case text-xl"><h3>My Toys</h3></div></Link>
                        <Link to='/addProduct'><div className="btn btn-ghost normal-case text-xl"><h3>Add A Toy</h3></div></Link>
                    </div>
                    ) :
                    (
                        <div></div>
                    )
                }
                <Link to='/blogs'><div className="btn btn-ghost normal-case text-xl"><h3>Blog</h3></div></Link>
            </div>
            <div >
                <div>
                    {user ? (
                        
                        <div className='flex gap-3'>
                            <div className="w-12 h-12 avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img className='rounded-full border-spacing-1 border-slate-400' src={user.photoURL} />
                            </div>
                            <div><button className='btn btn-secondary'>Logout</button></div>
                        </div>
                    ) :
                        (
                            <Link to='/login'><div><button className='btn btn-primary'>LogIn</button></div></Link>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;