import React from 'react';
import cvPDF from '../assets/images/CV.pdf';

const AboutMe = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "250+", label: "Happy Clients" },
    { number: "650+", label: "Projects Done" },
    { number: "38", label: "Get Awards" }
  ];
  
  const handleDownload = async () => {
    try {
      const response = await fetch(cvPDF);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'cv.pdf';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div id='about' className="bg-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        
        <div>
          
          
          {/* Know Me More Section */}
          <div className="relative flex justify-center">
          <h2 className="text-gray-500 text-[150px] font-bold absolute -top-20 opacity-20">
            ABOUT ME
          </h2>
            <h3 className="text-3xl font-bold mb-12 pt-8">
              Know Me More
              <div className="w-12 h-0.5 bg-red-500 mt-2"></div>
            </h3>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-[2fr,1fr] gap-8">
            <div>
              <h2 className="text-3xl mb-4">
                I'm <span className="text-red-500">Mian Abu Obaida</span>, Frontend Web Developer
              </h2>
              <p className="text-gray-400 mb-4">
                I help you build brand for your business at an affordable price. Thousands of clients have
                procured exceptional results while working with our dedicated team. when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-400">
                Delivering work within time and budget which meets client's requirements is our moto. Lorem
                Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Name: </span>
                Mian Abu Obaida
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Email: </span>
                <a href="mailto:chat@simone.com" className="text-red-500">
                  mianabuobaida15@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Age: </span>
                26 Years 8 Months 
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">From: </span>
                Lahore, Punjab, Pakistan.
              </p>
              <div className='my-4'>
              <button 
                className="bg-red-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-white hover:text-red-500 transition-colors"
                onClick={handleDownload}
              >
                Download CV
              </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 border-r border-gray-700 last:border-r-0">
                <h3 className="text-5xl font-bold text-gray-500 mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;