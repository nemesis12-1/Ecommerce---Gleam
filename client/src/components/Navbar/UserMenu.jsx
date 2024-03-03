import React from 'react'
import { NavLink } from 'react-router-dom';

const UserMenuLinks = [
    {
        title: 'Profile',
        path: '/dashboard/user/profile',
    },
    {
        title: 'Order',
        path: '/dashboard/user/orders',
    },
]

const UserMenu = () => {
    return (
        <>
            <div>
                <ul className='flex flex-col w-[200px]'>
                    {UserMenuLinks.map((item, index) => (
                        <li
                            key={index}
                            className="inline mx-2 text-nav text-[0.9rem] hover:text-ter"
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "block py-2 px-2 text-pri hover:bg-sec hover:rounded bg-sec" : "block py-2 px-2 text-nav hover:bg-sec hover:rounded "
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UserMenu