import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <Layout>
            <div className='flex flex-col justify-center items-center min-h-[80vh]'>
                <h1 className='md:text-[100px] text-5xl font-extrabold text-ter leading-snug'>404</h1>
                <h2 className='md:text-[40px] text-3xl font-extrabold text-ter'>Oops! Page not found</h2>

                <button className='bg-pri text-sec px-4 py-2 rounded mt-8 font-bold hover:bg-sec hover:text-pri'>
                    <Link to='/'>
                        Go Back
                    </Link>
                </button>
            </div>
        </Layout>
    )
}

export default PageNotFound