import React from 'react';

const BestSellingToys = () => {
    return (
        <div className=' mt-6 pb-7 bg-amber-100 hover:bg-lime-100'>
            <div>
                <h3 className="text-center text-7xl  pt-8 pb-8 hover:text-cyan-800">Best Selling Toys</h3>
            </div>
            <div className='flex justify-around'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Fashionista Barbie</h2>
                        <p>The Fashionista Barbie doll is a stylish and trendy addition to any doll collection. It comes with a variety of fashionable outfits and accessories, allowing for endless mix-and-match fun. With her diverse styles and body types, this Barbie doll promotes inclusivity and self-expression.</p>
                    </div>
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1612506001235-f0d0892aa11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmllJTIwZG9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"

                            alt="barbie" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1545724149-1d8de3baa55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="American Girl" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Julie Albright Doll
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Meet Julie Albright, a character from the 1970s. This American Girl doll comes with an authentic outfit and accessories that reflect the style and spirit of the time. Julie is a fun-loving and adventurous girl who will inspire young imaginations and teach important lessons about friendship and individuality.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Sweet Dreams Baby Doll</h2>
                        <p>The Sweet Dreams Baby Doll is perfect for bedtime routines and nurturing play. It comes with a soft blanket, pacifier, and a bottle. This baby doll has a gentle, calming expression and a cuddly body, providing comfort and joy to your child.</p>
                    </div>
                    <figure><img src="https://images.unsplash.com/photo-1559529648-131cccaaa202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHx0b3l8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Baby Doll" /></figure>
                </div>
            </div>
        </div>
    );
};

export default BestSellingToys;