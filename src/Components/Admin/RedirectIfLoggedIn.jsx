import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/Provider';
import Loader from '../Loader/Loader';
 

const RedirectIfLoggedIn = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkAuth = async () => {

            setLoading(false);
        };
        checkAuth();
    }, []);

    if (loading) {
        return  <Loader></Loader>
    }

    if (user) {
        return <Navigate to="/admin" replace />;
    }

    return children;
};

export default RedirectIfLoggedIn;
