import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../api";
import { useAuth } from "../../context/auth";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { auth, setAuth } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('api/auth/login', {
                email,
                password,
            });

            console.log(response.data.message);

            { response.data.success ? toast.success(response.data.message) : toast.error(response.data.message) };
            setAuth({
                ...auth,
                user: response.data.user,
                token: response.data.token,
            });
            localStorage.setItem('auth', JSON.stringify(
                response.data
            ));
            navigate(location.state || '/');

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };


    return (
        <Layout>
            <div className="md:min-h-[80vh] min-h-[85vh] flex items-center justify-center ">
                <form
                    onSubmit={handleSubmit}
                    className="border-sec border-2 p-4 rounded md:w-[400px] w-[340px] ">

                    <div className="my-3">
                        <h2>Sign In</h2>
                        <p>to continue to Gleam - Ecommerce</p>
                    </div>

                    <div className="flex flex-col py-3">
                        <label htmlFor="email" className="text-xl">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="bg-sec border-none outline-none text-pri p-2 rounded"
                        />
                    </div>

                    <div className="flex flex-col py-3">
                        <label htmlFor="password" className="text-xl">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="bg-sec border-none outline-none text-pri p-2 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-ter text-sec px-4 py-2 rounded mt-2 font-bold hover:bg-sec hover:text-pri text-center w-full"
                    >
                        Login
                    </button>

                    <div className="mt-5">
                        <Link to="/register" className="text-ter ">
                            No account? Register
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;





