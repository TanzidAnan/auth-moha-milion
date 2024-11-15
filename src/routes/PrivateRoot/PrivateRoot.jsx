import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoot = ({children}) => {

    const {user} =useContext(AuthContext)
    if(user){
        return children
    }

    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoot;