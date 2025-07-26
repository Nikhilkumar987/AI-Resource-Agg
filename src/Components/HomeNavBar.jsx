import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-15 z-50 w-full bg-black px-8 py-4 flex flex-col md:flex-row md:items-center justify-between text-white font-medium">
      {/* Top - Logo + Title and Hamburger */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">AGGERI</span>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Center - Nav Options */}
      <div className="hidden md:flex relative gap-8 px-4 py-4 text-md rounded-full bg-white/10 backdrop-blur-md">
        <NavLink to="/" className="text-white font-semibold hover:text-purple-300 transition">
          Home
        </NavLink>
        <NavLink to="/docs" className="text-white hover:text-purple-300 transition">
          Docs
        </NavLink>
        <NavLink to="/footer" className="text-white hover:text-purple-300 transition">
          Contact
        </NavLink>
      </div>

      {/* Right - GitHub Button */}
      <div className="hidden md:block">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-full px-3 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 transition"
        >
          <span className="mr-3 text-sm font-medium">Star On GitHub</span>
        </a>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-300 transition">
            Home
          </NavLink>
          <NavLink to="/docs" onClick={() => setMenuOpen(false)} className="hover:text-purple-300 transition">
            Docs
          </NavLink>
          <NavLink to="/footer" onClick={() => setMenuOpen(false)} className="hover:text-purple-300 transition">
            Contact
          </NavLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full px-3 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 transition"
          >
            <span className="text-sm font-medium">Star On GitHub</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
