import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Navbar/AdminMenu'
import Card from '../../components/Card/Card'


const AdminDashboard = () => {
    return (
        <Layout>
            <section className='min-h-[80vh] w-[90%] mx-auto'>
                <h2 className='text-4xl py-2 px-4 text-pri mb-6 mt-4'>Admin Panel</h2>
                <div className='flex h-[65vh] '>
                    <div className='w-[20%]'>
                        <AdminMenu />
                    </div>
                    <div className='w-[80%] border-sec border-l'>
                        <Card />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AdminDashboard