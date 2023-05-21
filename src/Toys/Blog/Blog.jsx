import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h3 className='text-4xl text-slate-400 hover:text-orange-300 text-center'>BLOGS</h3>
            </div>
            <div>
                <div className='flex flex-col gap-8 p-6'>
                    <div className="bg-slate-200 shadow-slate-100 rounded px-3 py-3">
                        <div>
                            <h3>What is an access token and refresh token? How do they work and where should we store them on the client side?</h3>
                            <p>Acces token is a token that will be given by serverside and it is neede to get access. Refresh token also given by serverside. Refresh token is needed to take access token. At first from client request server gives refresh token. That token client side gets and by this refresh token client side get access token. Then in the client side it is stored in local storage but it is not the safest way. Then by providing this access token client side is authenticated by server side. And client side gets data.</p>
                        </div>
                    </div>
                    <div  className="bg-slate-200 shadow-slate-100 rounded px-3 py-3">
                        <div>
                            <h3>Compare SQL and Non SQL database.</h3>
                            <p>sql database is structured but non sql database is not structured. Non sql database are flexible. Non Sql database stores data in various format. But sql database stores data is a structured format. Sql database provide strong consistancy. Non Sql database is useful to handle large amount of unstructured or semi structured data. </p>
                        </div>
                    </div>
                    <div  className="bg-slate-200 shadow-slate-100 rounded px-3 py-3">
                        <div>
                            <h3>What is express js and what is nest js?</h3>
                            <p>Express js is a web application frame work for nodejs. Express js is for web application and Api. It helps to handle https request. It helps to build serverside application. Nest js is a progressive node js frame work that also helps to build server. It is inspired by angular. It provides many robust feature.  </p>
                        </div>
                    </div>
                    <div  className="bg-slate-200 shadow-slate-100 rounded px-3 py-3">
                        <div>
                            <h3>What is Mongodb aggreate and how does it work?</h3>
                            <p>In mongodb aggreate method is used to perform advanced data processing. It helps to handle complex data precessing. The MongoDB aggregate method processes data through a pipeline of stages, where each stage applies specific operations on the data, enabling complex computations, transformations, and aggregations to be performed. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;