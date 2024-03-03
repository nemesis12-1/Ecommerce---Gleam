
import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Navbar/UserMenu'

const Profile = () => {
    return (
        <Layout>
            <section className='min-h-[80vh] w-[90%] mx-auto'>
                <h2 className='text-4xl py-2 px-4 text-pri mb-6 mt-4'>Profile</h2>
                <div className='flex h-[65vh] '>
                    <div className='w-[20%]'>
                        <UserMenu />
                    </div>
                    <div className='w-[80%] border-sec border-l'>
                        Your Profile
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Profile