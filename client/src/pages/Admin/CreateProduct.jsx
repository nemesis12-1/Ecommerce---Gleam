import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Navbar/AdminMenu'

const CreateProduct = () => {
    return (
        <Layout>
            <section className='min-h-[80vh] w-[90%] mx-auto'>
                <h2 className='text-4xl py-2 px-4 text-pri mb-6 mt-4'>Create Product</h2>
                <div className='flex h-[65vh] '>
                    <div className='w-[20%]'>
                        <AdminMenu />
                    </div>
                    <div className='w-[80%] border-sec border-l'>
                        Create Product
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default CreateProduct