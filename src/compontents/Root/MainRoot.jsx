import React from 'react';
import { Outlet } from 'react-router-dom';

const MainRoot = () => {
    return (
        <div>
            <h1>this is Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;