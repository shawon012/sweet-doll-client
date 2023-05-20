import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ row, index }) => {
    const { _id, photoUrl, toyName, sellerName, sellerEmail, price, rating, availableQuantity, detailDescription, category } = row;
    return (

        <tr>
            <th>{index}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt="Doll Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                    </div>
                </div>
            </td>
            {/* <td>{toyName}</td> */}
            <td>{sellerName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th><Link to={`${_id}`}><button className='btn btn-info'>View More</button></Link></th>
        </tr>

    );
};

export default ToyRow;