import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';

const MainRoot = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;