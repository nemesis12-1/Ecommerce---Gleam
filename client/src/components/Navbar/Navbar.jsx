import React from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import DropdownBtn from "./DropdownBtn";

const navItems = [
    { title: "Home", link: "/" },
    { title: "Categories", link: "/categories" },
    { title: "Cart", link: "/cart" },
];

const Navbar = () => {
    const { auth } = useAuth();

    return (
        <>
            <nav className=" py-2 border-sec border-b">
                <div className="w-[90%] mx-auto flex items-center justify-between">
                    <div>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>

                    <div className="w-[300px] ">
                        <SearchInput />
                    </div>

                    <div className="flex items-center gap-4">
                        <ul>
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="inline mx-2 text-nav text-[0.9rem] hover:text-ter"
                                >
                                    <NavLink
                                        to={item.link}
                                        className={({ isActive }) =>
                                            isActive ? "text-pri" : "text-nav"
                                        }
                                    >
                                        {item.title}

                                        {item.title === "Cart" && (
                                            <span className="text-pri text-md ml-1 rounded-full bg-sec px-2 py-1">
                                                2
                                            </span>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div>

                            {!auth.user ?
                                <button className="border-sec border-[1px] text-pri px-3 py-1 rounded text-[0.9rem] hover:bg-sec">
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </button> :
                                <>

                                    <DropdownBtn />
                                    {/* <button onClick={handleLogout} className="border-sec border-[1px] text-pri px-3 py-1 rounded text-[0.9rem] hover:bg-sec">
                                        <Link to="/login">
                                            Logout
                                        </Link>
                                    </button> */}
                                </>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
