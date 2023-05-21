import React from 'react';
import img1 from '../../../assets/d1.png'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to our toy emporium, where every visit is an invitation to indulge in wonder. Find the perfect companion for adventure, laughter, and boundless imagination.</p>
                    <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;