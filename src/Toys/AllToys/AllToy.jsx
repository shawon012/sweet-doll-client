import React, { useEffect, useState } from 'react';
import ToyRow from './ToyRow';

const AllToy = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sweet-doll-server.vercel.app/products');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row, index) =>(
                                <ToyRow key={row._id} row={row} index={index + 1}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;