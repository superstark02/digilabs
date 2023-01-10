import React from 'react';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import Feature1 from '../components/Feature1';
import Workflow from '../components/Workflow';
import Manage from '../components/Manage';
import Upperfooter from '../components/Upperfooter';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Feature />
            <Feature1 />
            <Workflow />
            <Manage />
            <Upperfooter />
            <Footer />
        </>
    )
}

export default Homepage