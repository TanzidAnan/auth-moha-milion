import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';

const MainRoot = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;