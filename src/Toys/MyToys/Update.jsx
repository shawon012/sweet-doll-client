import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    console.log(product)
    const { _id, photoUrl, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription, category } = product;
    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = sellerEmail;
        const photoUrl = form.photoUrl.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const myToy = {
            price: price,
            photoUrl: photoUrl,
            toyName: toyName,
            sellerName: sellerName,
            sellerEmail: email,
            rating: ratings,
            availableQuantity: quantity,
            detailDescription: details,
            category: subCategory
        }

        console.log(myToy);

        fetch(`https://sweet-doll-server.vercel.app/products/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                }
            })

    }
    return (
        <div className='bg-red-100 hover:bg-green-100'>
            <form onSubmit={handleUpdateToy}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ms-11 mr-11 pt-11'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" placeholder="Toy Name" defaultValue={toyName} name='toyName' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" placeholder="Seller Name" defaultValue={sellerName} name='sellerName' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email" name='email' defaultValue={user?.email} className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" defaultValue={photoUrl} name='photoUrl' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name="subCategory" defaultValue={category} className="input input-bordered input-secondary w-full">
                            <option value="">Select Sub Category</option>
                            <option value="babyDolls">babyDolls</option>
                            <option value="americanGirlDolls">americanGirlDolls</option>
                            <option value="barbieDolls">barbieDolls</option>
                        </select>
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name='price' defaultValue={price} className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" placeholder="Ratings" defaultValue={rating} name='ratings' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder="Available Quantity" defaultValue={availableQuantity} name='quantity' className="input input-bordered input-secondary w-full " />
                    </div>
                </div>
                <div className='ms-11 mr-11 mb-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" defaultValue={detailDescription} placeholder="Deatils" name='details' className="input input-bordered input-secondary w-full " />
                    </div>
                </div>
                <div className='text-center pb-11'>
                    <button className='btn btn-outline px-7' type='submit'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default Update;