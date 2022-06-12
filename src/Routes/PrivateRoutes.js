import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ children, ...rest }) => {
    const isAuthenticated = localStorage.getItem('user-details') ? localStorage.getItem('user-details') : null;
    return (
        <Route {...rest} render={() => {
            return !isAuthenticated ? children: <Redirect to={{pathname: "/login"}} />
        }} />
    )
}

export default PrivateRoutes;