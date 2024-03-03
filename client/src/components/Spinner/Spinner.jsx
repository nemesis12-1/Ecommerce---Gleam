import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";


const Spinner = ({ path = 'login' }) => {
    const [count, setCount] = useState(2);
    const navigate = useNavigate();
    const { auth } = useAuth();
    const location = useLocation();


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        {
            count === 0 && navigate(`{/${path}`, {
                state: location.pathname
            })
        }
        return () => clearInterval(interval);
    }, [count, navigate, location])

    return (
        <div className="w-[90%] mx-auto flex flex-col gap-4 justify-center items-center h-screen">
            <div
                className=" inline-block text-nav h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>


            {auth.user ? (
                <>
                    <p>Redirecting you to Dashboard page</p>
                    <p>Logged in as {auth.user.name}</p>
                </>

            ) : (
                <>
                    <p>Unauthorised Access</p>
                    <p>Redirecting you to Login page in {count} sec</p>
                </>
            )}

        </div>
    );
};

export default Spinner;
