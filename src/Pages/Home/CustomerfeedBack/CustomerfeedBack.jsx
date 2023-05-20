import React from 'react';

const CustomerfeedBack = () => {
    return (
        <div className='bg-teal-100 hover:bg-purple-100'>
            <div>
                <h3 className="text-center text-7xl  pt-8 pb-8 hover:text-red-600">Customer Review</h3>
            </div>
            <div className="hero  bg-base-200 hover:bg-red-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="max-w-sm h-52 rounded-lg shadow-2xl" />
                    <div className='hover:text-amber-600'>
                        <h1 className="text-5xl ">Authentic Toys Galore!</h1>
                        <p className="py-6">This toy shop is a gem! They offer an amazing variety of authentic toys that you can trust. The staff is friendly and helpful, making the shopping experience a breeze. From educational toys to action figures and more, they have it all. The quality of their products is exceptional, ensuring hours of safe and imaginative play. Highly recommend this toy shop for authentic toys!</p>
                        <p className='text-2xl'>-Sarah</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 hover:bg-fuchsia-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src="https://images.unsplash.com/photo-1527284007122-cd75f33493b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYXJ0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="max-w-sm h-52 rounded-lg shadow-2xl" />
                    <div className='hover:text-teal-700'>
                        <h1 className="text-5xl">Superior Quality Toys!</h1>
                        <p className="py-6">This toy shop offers toys of remarkable quality. Each item I purchased was durable and well-crafted, ensuring long-lasting enjoyment. The attention to detail is exceptional, showcasing their commitment to excellence. I was thoroughly impressed with the superior quality of their toys. Highly recommend for those seeking top-notch products!</p>
                        <p className='text-2xl'>Julie-</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerfeedBack;