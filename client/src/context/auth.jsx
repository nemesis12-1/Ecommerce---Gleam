import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: '',
    });

    axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            console.log(parseData);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}


// custom hook
const useAuth = () => {
    return useContext(AuthContext);
}
export { useAuth, AuthProvider };