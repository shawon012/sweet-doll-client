import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import BestSellingToys from '../BestSellingToys/BestSellingToys';
import CustomerfeedBack from '../CustomerfeedBack/CustomerfeedBack';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <BestSellingToys></BestSellingToys>
            <CustomerfeedBack></CustomerfeedBack>
        </div>
    );
};

export default Home;