import React from 'react';
import { useAuth } from '../../context/auth';

const Card = () => {
    const { auth } = useAuth();
    return (
        <>
            {auth?.user?.role === 'admin' ? <>
                <div className='border-sec border p-4 w-[30%] ml-4'>
                    <h2 className='text-pri text-4xl pb-3'>Admin details  </h2>
                    <p>Admin name : {auth?.user?.name}</p>
                    <p>Admin email : {auth?.user?.email}</p>
                    <p>Admin Address : {auth?.user?.address}</p>
                    <p>Admin Phone no. : {auth?.user?.phone}</p>
                </div>
            </> : <>
                <div className='border-sec border p-4 w-[30%] ml-4'>
                    <h2 className='text-pri text-4xl pb-3'>User details  </h2>
                    <p>User name : {auth?.user?.name}</p>
                    <p>User email : {auth?.user?.email}</p>
                    <p>User Address : {auth?.user?.address}</p>
                    <p>User Phone no. : {auth?.user?.phone}</p>
                </div>
            </>}
        </>
    )
}

export default Card