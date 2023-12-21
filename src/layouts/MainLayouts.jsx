import React from 'react';
import Navber from '../pages/shared/navigation/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;