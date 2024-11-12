import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({ children }) => {

    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user) {
        return children
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRouts;