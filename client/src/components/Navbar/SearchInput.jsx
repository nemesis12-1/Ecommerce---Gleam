import React from 'react';
import search from '../../assets/icons/search.svg'

const SearchInput = () => {
    return (
        <form className='border-sec border-[1px]  rounded flex items-center justify-between w-[100%] '>
            <input
                type="text"
                placeholder="Search..."
                className=" ml-2 p-1 rounded-md bg-transparent text-pri outline-none overflow-hidden w-full text-[0.9rem]"
            />
            <button type='button' className=' py-1 text-nav hover:bg-sec px-2'>
                <img src={search} alt="search" className='w-6 h-6' />
            </button>
        </form>
    )
}

export default SearchInput