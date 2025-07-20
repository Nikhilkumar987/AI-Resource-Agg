import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
function Layout()
{
    return (
        <>
        
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;