import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const product = useLoaderData();
    console.log(product)
    const { _id, photoUrl, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription, category } = product;
    console.log(_id, toyName, photoUrl)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={photoUrl} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{toyName}</h1>
                        <h1 className="text-2xl ">Seller Name: {sellerName}</h1>
                        <h1 className="text-2xl ">Seller Email: {sellerEmail}</h1>
                        <h1 className="text-3xl font-bold">Price: ${price}</h1>
                        <h1 className="text-3xl font-bold">Quantity: {availableQuantity}</h1>
                        <h1 className="text-3xl font-bold">Rating: {rating}</h1>
                        <p className="py-6">Details: {detailDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;