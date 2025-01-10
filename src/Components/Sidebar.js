// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import profilePic from '../assets/images/profile.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'whatido', label: 'What I Do' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonial', label: 'Testimonial' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#111418] text-white flex flex-col items-center py-8">
      {/* Profile Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-[#343A40]">
        <img
          src={profilePic}
          alt="Simone Olivia"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-semibold mb-8">Mian Abu Obaida</h1>

      {/* Navigation Links */}
      <nav className="w-full">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={() => setActiveLink(link.id)}
            className={`block px-8 py-3 text-center cursor-pointer transition-colors duration-300 
              ${activeLink === link.id 
                ? 'text-[#FF0038]' 
                : 'text-white hover:text-[#FF0038]'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className='pt-8'>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-red-500 cursor-pointer" />
            </div>
      </div>
    </aside>
  );
};

export default Sidebar;