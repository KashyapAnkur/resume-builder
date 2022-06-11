import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoutes = ({ children, ...rest }) => {
  
    const isAuthenticated = localStorage.getItem('user-details') ? localStorage.getItem('user-details') : null;
    return (
        isAuthenticated ? 
        {children} : <Redirect to="/login" />
    )
}

export default PrivateRoutes;