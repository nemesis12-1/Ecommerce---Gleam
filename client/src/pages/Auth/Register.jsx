import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import API from "../../api";


const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('api/auth/register', {
                name,
                email,
                address,
                phone,
                password,
            });

            console.log(response.data);

            if (response && response.data.success) {
                toast.success(response.data && response.data.message);
                navigate('/login');
            } else {
                toast.error(response.data.message);
            }
            
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    return (
        <Layout>
            <div className="md:min-h-[80vh] min-h-[85vh] flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="border-sec border-2 p-4 rounded md:w-[1000px] w-[340px]"
                >

                    <div className="my-3">
                        <h2>Create your account</h2>
                        <p>to continue to Gleam - Ecommerce</p>
                    </div>

                    <div className="md:grid md:grid-cols-4 md:grid-rows-4 md:gap-2 mt-8 flex flex-col gap-3 ">
                        <div className="col-span-2 flex flex-col">
                            <label htmlFor="name" className="text-xl">
                                Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                type="text"
                                id="name"
                                className="bg-sec border-none outline-none text-pri p-2 rounded"
                            />
                        </div>

                        <div className="col-span-2 col-start-3 flex flex-col">
                            <label htmlFor="email" className="text-xl">
                                Email
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                type="email"
                                id="email"
                                className="bg-sec border-none outline-none text-pri p-2 rounded"
                            />
                        </div>

                        <div className="col-span-2 row-span-2 row-start-2 flex flex-col">
                            <label htmlFor="address" className="text-xl">
                                Address
                            </label>
                            <textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                type="text"
                                id="address"
                                className="bg-sec border-none outline-none text-pri p-2 rounded resize-none h-full"
                            />
                        </div>

                        <div className="col-span-2 col-start-3 row-start-2 flex flex-col">
                            <label htmlFor="phone" className="text-xl">
                                Phone no.
                            </label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                type='text'
                                id="phone"
                                className="bg-sec border-none outline-none text-pri p-2 rounded"
                            />
                        </div>

                        <div className="col-span-2 col-start-3 row-start-3 flex flex-col">
                            <label htmlFor="password" className="text-xl">
                                Password
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                type="password"
                                id="password"
                                className="bg-sec border-none outline-none text-pri p-2 rounded"
                            />
                        </div>

                        <div className="col-span-4 row-start-4">
                            <button
                                type="submit"
                                className="bg-ter text-sec px-4 py-2 rounded mt-2 font-bold hover:bg-sec hover:text-pri text-center w-full"
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <Link to="/login" className="text-ter ">
                            Have An account? Login
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Register;
