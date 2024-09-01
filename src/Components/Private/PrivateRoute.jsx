import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Provider';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoutes({ children }) {
    const { user } = useContext(AuthContext);
    const location = useLocation(); // Use useLocation to get the current location

    if (user) {
        return children;
    } else {
        // Redirect to login page and pass the current location in state
        return <Navigate to="/login" state={{ from: location }} />;
    }
}

export default PrivateRoutes;
