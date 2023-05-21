import React, { useContext, useEffect, useState } from 'react';
import MyToyRow from './MyToyRow';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sweet-doll-server.vercel.app/products');
                const jsonData = await response.json();
                const filteredData = jsonData.filter((row) => row.sellerEmail === user.email);
                setData(filteredData);
                setFilteredData(filteredData.slice(0, 20));
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user.email]);
    console.log(data);
    const handleSearch = () => {
        const filteredData = data.filter((row) => {
            return row.toyName.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredData(filteredData.slice(0, 20));
        setShowMore(false);
    };
    const handleShowMore = () => {
        if (showMore) {
            setFilteredData(data.slice(0, 20));
        } else {
            setFilteredData(data);
        }
        setShowMore(!showMore);
    };
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://sweet-doll-server.vercel.app/products/${id}`, {
                method: 'DELETE'
            })  
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = filteredData.filter(data => data._id !== id);
                        setFilteredData(remaining);
                    }
                })
        }
    }
    const handleSortOrder = () => {
        const sortedData = [...filteredData].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setFilteredData(sortedData);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
       

    };
    return (
        <div>
            <div className="mb-4 mt-4 ms-4">
                <input type="text" placeholder="Search by toy name..." className="input input-bordered input-secondary w-full max-w-xs" value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)} />
                <button className="ms-4 btn btn-outline btn-secondary" onClick={handleSearch}>Search</button>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Category</th>
                            <th>
                                Price{' '}
                                <button
                                    className="text-blue-500"
                                    onClick={handleSortOrder}
                                >
                                    {sortOrder === 'asc' ? '▲' : '▼'}
                                </button>
                            </th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((row, index) => (
                                <MyToyRow key={row._id} row={row} index={index + 1} handleDelete={handleDelete} />
                            ))
                        }
                    </tbody>
                </table>
                <div className="text-center">
                    <button className="px-4 py-2 mb-7 btn btn-outline btn-primary mt-4" onClick={handleShowMore}>
                        {showMore ? 'Hide' : 'Show More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyToys;