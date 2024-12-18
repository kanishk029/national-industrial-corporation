// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <a className="logo-link" href="/"><img src="img/nic_logo.jpg" alt="Logo" style={{ height: '40px', width: '40px' }} /></a>
                <a className="logo-link" href="/"><span className="company-name">National Industrial Corporation</span></a>
            </div>

            {/* Toggle the nav links based on the isOpen state */}
            <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
                <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Our Products</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
            </div>

            {/* Button to toggle the mobile menu */}
            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
        </nav>
    );
};

export default Navbar;