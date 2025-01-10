// src/components/Hero.js
import React, { useState } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import backgroundImage from '../assets/images/hero.jpg'

const Hero = () => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState('bg-teal-500');

  const colors = [
    'bg-purple-500', 'bg-blue-500', 'bg-indigo-500', 'bg-teal-500',
    'bg-red-500', 'bg-pink-500', 'bg-green-500', 'bg-yellow-500',
    'bg-orange-500', 'bg-brown-500'
  ];

  const toggleColorSwitcher = () => {
    setShowColors(!showColors);
  };

  const typedText = useTypewriter({
    words: ['Freelancer.', 'Developer.', 'Designer.'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
  });

  return (
    <section 
      id="home" 
      className={`relative h-screen w-full ${selectedColor}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60">
      
      </div>

      {/* Settings button */}
      <button 
        className="absolute top-6 right-6 z-20 text-white/70 hover:text-white"
        onClick={toggleColorSwitcher}
      >
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M24 14.187v-4.374l-2.4-.281c-.163-.785-.407-1.543-.724-2.26l1.724-1.724-3.093-3.093-1.724 1.724c-.718-.317-1.475-.561-2.26-.724L15.242 0h-4.374l-.281 2.4c-.785.163-1.543.407-2.26.724L6.603 1.4 3.51 4.493l1.724 1.724c-.317.718-.561 1.475-.724 2.26L2.11 8.758v4.374l2.4.281c.163.785.407 1.543.724 2.26l-1.724 1.724 3.093 3.093 1.724-1.724c.718.317 1.475.561 2.26.724l.281 2.4h4.374l.281-2.4c.785-.163 1.543-.407 2.26-.724l1.724 1.724 3.093-3.093-1.724-1.724c.317-.718.561-1.475.724-2.26l2.4-.281z"
          />
        </svg>
      </button>

      {/* Color Switcher */}
      {showColors && (
        <div className="absolute top-16 right-6 z-20 bg-white p-4 rounded shadow-lg">
          <h3 className="text-lg font-bold mb-2">Color Switcher</h3>
          <div className="flex flex-wrap">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className={`w-8 h-8 m-1 cursor-pointer ${color}`} 
                onClick={() => {
                  console.log(`Selected color: ${color}`);
                  setSelectedColor(color);
                }}
              />
            ))}
          </div>
          <button className="mt-2 px-4 py-2 bg-teal-500 text-white rounded">
            Reset Default Teal
          </button>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl md:text-5xl font-light mb-4">
          Welcome
        </h1>
        
        <div className="text-4xl md:text-6xl font-bold mb-6 text-center">
          <span>I'm a </span>
          <span className="inline-block min-w-[2ch] border-r-2 border-white">
            {typedText}
          </span>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          based in Lahore, Punjab, Pakistan.
        </p>

        <button className="px-8 py-3 border-2 border-red-500 text-red-500 rounded-full 
          hover:bg-red-500 hover:text-white transition-all duration-300 text-lg font-medium">
          Hire Me
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;