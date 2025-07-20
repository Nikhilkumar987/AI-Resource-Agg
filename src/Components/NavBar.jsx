import React from 'react';
import { Star } from 'lucide-react'; // icon (optional, you can use an image or SVG too)
import './NavBar.css'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between text-white font-medium bg-black ">
      
      {/* Left - Logo + Title */}
      <div className="flex items-center gap-2">
       {/* <img src="public/logo.svg" alt="" className='w-6' /> */}
        <span className="text-lg font-semibold">AGGERI</span>
      </div>

      {/* Center - Nav Options */}
<div className="relative flex  gap-8 px-4 py-4 text-white text-md rounded-full bg-white/10 backdrop-blur-md inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] left-[00px] ">
  <NavLink to="/" className="text-white font-semibold flex items-center gap-1 hover:text-purple-300 transition">
   Home
  </NavLink>
  <NavLink to="/docs" className="text-white hover:text-purple-300 transition">Docs</NavLink>
  <NavLink href="/footer" className="text-white hover:text-purple-300transition">contact</NavLink>
</div>

      {/* Right - GitHub Button */}
      <div className='hidden md:block'>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-full px-3 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 transition"
        >
          <span className="mr-3 text-sm font-medium">Star On GitHub</span>
        </a>
      </div>

    </nav>
  );
};

export default NavBar;
