import React from 'react';
import img from '../assets/four.png'
import { Link } from 'react-router-dom';
const Notfound = () => {
    return (
        <div className='flex justify-around p-36 text-center'>
            <div className='w-3/5 h-96'>
                <img className='w-full h-full' src={img} alt="" />
            </div>
           <div className='flex items-center'>
           <div>
                <Link to='/'><button className='btn btn-primary'>Back to Home</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Notfound;