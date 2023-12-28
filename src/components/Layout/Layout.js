import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            
            {/* все остальное swiper, sitebar,... footer */}
        </>
    );
};

export default Layout;