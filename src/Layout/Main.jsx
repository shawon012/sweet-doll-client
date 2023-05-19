import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Hooter from '../Pages/Shared/Hooter';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Hooter></Hooter>
        </div>
    );
};

export default Main;