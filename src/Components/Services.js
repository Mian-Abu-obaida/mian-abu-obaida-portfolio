import React from 'react';
import { Palette, Monitor, Pencil, PenTool, BarChart2, Megaphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 " />,
      title: "Graphic Design",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      icon: <Monitor className="w-8 h-8 " />,
      title: "Web Design",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "App Design & Develop",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Business Analysis",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "SEO Marketing",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    }
  ];

  return (
    <div id='whatido' className="bg-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Background Text */}
        <div>
          
          {/* What I Do Section */}
          <div className="relative flex justify-center">
          <h2 className="text-gray-500 text-[150px] font-bold absolute -top-20 opacity-20">
            SERVICES
          </h2>
            <h3 className="text-3xl font-bold mb-16 pt-8">
              What I Do?
              <div className="w-12 h-0.5 bg-red-500 mt-2"></div>
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-800 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-gray-500">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
