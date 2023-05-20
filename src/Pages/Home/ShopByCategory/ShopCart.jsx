import React from 'react';

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
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;