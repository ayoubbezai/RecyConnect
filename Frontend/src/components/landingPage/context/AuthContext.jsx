import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('authToken') || null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (newToken) => {
        localStorage.setItem('authToken', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setToken(null);
        setUser(null);
    };

    const fetchUser = async (token) => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(res.data);
        } catch  {
            console.error("Invalid token or session expired");
            logout();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchUser(token);
        } else {
            setLoading(false);
        }
    }, [token]);

    const isAuthenticated = !!token && !!user;

    return (
        <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
