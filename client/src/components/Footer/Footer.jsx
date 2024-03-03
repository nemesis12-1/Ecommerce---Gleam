import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-nav border-sec border-t w-full text-center mt-4'>
      <p className='w-[90%] mx-auto py-1'>
        &copy; Made with ❤️ by Ashutosh Sahu
      </p>
      <p className=' flex gap-3 justify-center'>
        <Link to='/about' className='text-nav hover:text-ter'>
          About
        </Link>
        |
        <Link to='/contact' className='text-nav hover:text-ter'>
          Contact
        </Link>
        |
        <Link to='/privacy' className='text-nav hover:text-ter'>
          Privacy Policy
        </Link>
      </p>
    </div>
  )
}

export default Footer