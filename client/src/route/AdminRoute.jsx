import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { Outlet } from 'react-router-dom';
import API from '../api';
import Spinner from '../components/Spinner/Spinner';

export const AdminRoute = () => {
    const [ok, setOk] = useState(false);
    const { auth } = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await API.get('api/auth/admin-auth', {
                headers: {
                    'Authorization': auth?.token,
                }
            });
            console.log('admin route', res.data.message)

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

    return ok ? <Outlet /> : <Spinner path='' />;
}

