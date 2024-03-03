import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection'
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';


const Home = () => {
    const { auth, setAuth } = useAuth();
    return (
        <Layout>
            <section className='min-h-[80vh] w-[90%] mx-auto'>
                <HeroSection />
                <pre>{JSON.stringify(auth, null, 4)}</pre>
            </section>
           
        </Layout>
    )
}

export default Home