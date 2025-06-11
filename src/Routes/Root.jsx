import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Newsletter from '../Shared/Footer/Newsletter';

const Root = () => {
    return (
        <div>
            
            <header className='bg-[#1C2A44] py-3 md:py-6'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className='bg-[#1C2A44]'>
                <Newsletter></Newsletter>
                <div className="divider "></div>
                <Footer c></Footer>
            </footer>

        </div>
    );
};

export default Root;