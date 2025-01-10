// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto ">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Your trusted partner in digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">Features</li>
              <li className="hover:text-red-500 cursor-pointer">Services</li>
              <li className="hover:text-red-500 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div> */}
        <div className="border-t border-gray-800  text-center">
          <p className="text-gray-400 py-6">© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;