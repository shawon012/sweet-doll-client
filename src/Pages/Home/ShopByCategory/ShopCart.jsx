import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const ShopCart = ({ item }) => {
    const {user} = useContext(AuthContext)
    const { toyName, price, rating, _id, photoUrl } = item;
    console.log(toyName, price, rating, _id, photoUrl)
    const handleViewDetails = () => {
        if (!user) {
            alert('You have to log in first to view details.');
            return <Navigate to="/login" />;
        }
    };
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photoUrl} alt="Doll" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: ${price}</p>
                <p>Ratings: {rating}</p>
                <div className="card-actions">
                    <Link to={`products/${_id}`}><button onClick={handleViewDetails} className="btn btn-primary">View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ShopCart;