import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/landingPage/context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { token, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;

    return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
