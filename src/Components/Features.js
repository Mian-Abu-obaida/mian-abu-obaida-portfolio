// src/components/Features.js
import React from 'react';
import { FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Fast Performance',
      description: 'Lightning fast loading times and smooth interactions'
    },
    {
      icon: <FaLightbulb />,
      title: 'Smart Solutions',
      description: 'Intelligent features that adapt to your needs'
    },
    {
      icon: <FaChartLine />,
      title: 'Analytics',
      description: 'Detailed insights to grow your business'
    }
  ];

  return (
    <div id="whatido" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className='flex'>
              <div>
              <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
              </div>
              <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;