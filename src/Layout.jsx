import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomeNavBar from './Components/HomeNavBar';
import Footer from './Components/Footer';

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Always use triple equals ===

  return (
    <>
      {/* Use consistent spacing and avoid wrapping NavBar in extra div unless styling demands it */}
      {
        isHomePage?(<></>):(<NavBar/>)
      }

    <main>
       <Outlet />
    </main>
       
     

      <Footer />
    </>
  );
}

export default Layout;
