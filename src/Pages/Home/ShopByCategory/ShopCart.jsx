import React from 'react';
import { Link } from 'react-router-dom';

const ShopCart = ({ item }) => {
    const { toyName, price, rating, _id, photoUrl } = item;
    console.log(toyName, price, rating, _id, photoUrl)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photoUrl} alt="Doll" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: ${price}</p>
                <p>Ratings: {rating}</p>
                <div className="card-actions">
                    <Link to={`products/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;