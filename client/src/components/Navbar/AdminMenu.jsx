import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminMenuLinks = [
    { title: 'Create Category', path: '/dashboard/admin/create-category' },
    { title: 'Create Product', path: '/dashboard/admin/create-product' },
    { title: 'Products', path: '/dashboard/admin/products' },
    { title: 'Orders', path: '/dashboard/admin/orders' },
    { title: 'Users', path: '/dashboard/admin/users' },

]

const AdminMenu = () => {
    return (
        <>
            <div>
                <ul className='flex flex-col w-[200px]'>
                    {AdminMenuLinks.map((item, index) => (
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

export default AdminMenu