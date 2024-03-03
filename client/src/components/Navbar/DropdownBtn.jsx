import React, { useState } from "react";
import downarrow from "../../assets/icons/dropdown.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const DropdownBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { auth, setAuth } = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logged out successfully");
    };

    return (
        <div className="relative flex flex-col">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex justify-center items-center"
            >
                <p>{auth.user.name}</p>
                <img src={downarrow} alt="down arrow" className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className=" absolute top-[38px] w-auto right-0 rounded border-sec bg-background border">
                    <ul className="flex flex-col">
                        <Link
                            to={`/dashboard/${auth?.user?.role === "admin" ? "admin" : "user"}`}
                            className="hover:bg-sec p-2"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/login"
                            onClick={handleLogout}
                            className="hover:bg-sec p-2"
                        >
                            Logout
                        </Link>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownBtn;
