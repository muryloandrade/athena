/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Navigate } from 'react-router-dom';
import { useCustomerProvider } from './AuthContext';

const PrivateRoute = ({children}:any) => {
  const { user } = useCustomerProvider();
    if (!user) {
        return <Navigate to="/" />;
    }
    return children

}

export default PrivateRoute