import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { Outlet } from 'react-router-dom';
import API from '../api';
import Spinner from '../components/Spinner/Spinner';

export const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const { auth } = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await API.get('api/auth/user-auth', {
                headers: {
                    'Authorization': auth?.token,
                }
            });
            console.log('private route',  res.data.message)

            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        }
        if (auth?.token) {
            authCheck();
        }

    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}

