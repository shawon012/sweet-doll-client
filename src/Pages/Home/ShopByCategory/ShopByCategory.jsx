import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ShopCart from './ShopCart';

const ShopByCategory = () => {
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
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
    console.log(data)
    const babyDoll = data.filter(item => item.category === "babyDolls");
    const americanGirlDoll = data.filter(item => item.category === "americanGirlDolls");
    const barbieDoll = data.filter(item => item.category === "barbieDolls");
    console.log(babyDoll);
    console.log(americanGirlDoll);
    console.log(barbieDoll);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (

        <div>
            <div>
                <h3 className="text-center text-7xl  pt-8 pb-8">Shop By Category</h3>
            </div>
            <div className='ps-11 pr-11'>
                <Tabs selectedIndex={activeTab} onSelect={handleTabClick} >
                    <TabList className="tabs tabs-boxed flex justify-between border">

                        <Tab className={`tab ${activeTab === 0 ? 'tab-active w-1/3 h-12 ' : ' w-1/3 h-12 border'}`}>Tab 1</Tab>

                        <Tab className={`tab ${activeTab === 1 ? 'tab-active w-1/3 h-12' : 'w-1/3 h-12 border'}`}>Tab 2</Tab>
                        <Tab className={`tab ${activeTab === 2 ? 'tab-active w-1/3 h-12' : 'w-1/3 h-12 border'}`}>Tab 3</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex justify-around pt-8 pb-8'>
                            {barbieDoll.map(item => (
                                <ShopCart key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-around pt-8 pb-8'>
                            {americanGirlDoll.map(item => (
                                <ShopCart key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-around pt-8 pb-8'>
                            {babyDoll.map(item => (
                                <ShopCart key={item._id} item={item} />
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ShopByCategory;




