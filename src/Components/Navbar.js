// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#services', text: 'What I Do' },
    { href: '#resume', text: 'Resume' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#testimonial', text: 'Testimonial' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <div className= "w-64 bg-gray-800 text-white shadow-lg" >
      <div className="flex flex-col">
        <div className="flex justify-between items-center h-20 px-4">
          <a href="#home" className="text-2xl font-bold text-white">
            Simone
          </a>
          
        </div>

        <div className="flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors"
             
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;