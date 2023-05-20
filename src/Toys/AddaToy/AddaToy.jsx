import React from 'react';

const AddaToy = () => {
    return (
        <div className='bg-red-100 hover:bg-green-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ms-11 mr-11 pt-11'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                   <input type="text" placeholder="Toy Name" className="input input-bordered input-secondary w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                   <input type="text" placeholder="Seller Name" className="input input-bordered input-secondary w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                   <input type="text" placeholder="Email" className="input input-bordered input-secondary w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                   <input type="text" placeholder="Photo URL" className="input input-bordered input-secondary w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                   <input type="text" placeholder="Sub Category" className="input input-bordered input-secondary w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                   <input type="text" placeholder="Price" className="input input-bordered input-secondary w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                   <input type="text" placeholder="Ratings" className="input input-bordered input-secondary w-full " />
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                   <input type="text" placeholder="Available Quantity" className="input input-bordered input-secondary w-full " />
                </div>
            </div>
            <div className='ms-11 mr-11 mb-4'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                   <input type="text" placeholder="Deatils" className="input input-bordered input-secondary w-full " />
                </div>
            </div>
            <div className='text-center pb-11'>
                <button className='btn btn-outline px-7'>Submit</button>
            </div>
        </div>
    );
};

export default AddaToy;