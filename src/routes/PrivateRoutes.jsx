import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';

const PrivateRoutes = ({children}) => {

    const {user,loading} =useContext(AuthContext);

    if(loading) {
        return <div className='flex justify-center items-center text-white'>
            <ClockLoader className='text-white' />
        </div>
    }

    if(user ){
        return children;
    }

    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoutes;