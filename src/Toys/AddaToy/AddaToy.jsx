import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddaToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = user?.email;
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
            price: price,
            rating: ratings,
            availableQuantity: quantity,
            detailDescription: details,
            category: subCategory
        }

        console.log(myToy);

        fetch('https://sweet-doll-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service book successfully')
                }
            })

    }
    return (
        <div className='bg-red-100 hover:bg-green-100'>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ms-11 mr-11 pt-11'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" placeholder="Toy Name" name='toyName' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" placeholder="Seller Name" name='sellerName' className="input input-bordered input-secondary w-full " />
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
                        <input type="text" placeholder="Photo URL" name='photoUrl' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name="subCategory" className="input input-bordered input-secondary w-full">
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
                        <input type="text" placeholder="Price" name='price' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="text" placeholder="Ratings" name='ratings' className="input input-bordered input-secondary w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered input-secondary w-full " />
                    </div>
                </div>
                <div className='ms-11 mr-11 mb-4'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Deatils" name='details' className="input input-bordered input-secondary w-full " />
                    </div>
                </div>
                <div className='text-center pb-11'>
                    <button className='btn btn-outline px-7' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddaToy;