import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import cvPDF from '../assets/images/CV.pdf';

const ResumeSection = () => {
  const education = [
    {
      period: "2000 - 2004",
      title: "Computer Science",
      institution: "International University",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      period: "2005 - 2008",
      title: "Bachelor Degree",
      institution: "University of California",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      period: "2009 - 2012",
      title: "Master Degree",
      institution: "Harvard University",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    }
  ];

  const experience = [
    {
      period: "2012 - 2013",
      title: "Jr. UI UX Designer",
      company: "Themeforest",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      period: "2014 - 2016",
      title: "Jr. Product Designer",
      company: "Dribbble",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    },
    {
      period: "2017 - 2019",
      title: "Product Designer",
      company: "Adobe",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
    }
  ];

  const skills = [
    { name: "Web Design", percentage: 65 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 80 },
    { name: "React JS", percentage: 70 },
    { name: "Angular Js", percentage: 60 },
    { name: "Bootstrap", percentage: 99 }
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

  const handleOpenCV = () => {
    window.open(cvPDF, '_blank');
  };

  const TimelineItem = ({ period, title, institution, description, company, isCompany }) => (
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <span className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm mb-3">
        {period}
      </span>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <h5 className="text-red-500 mb-3">{institution}</h5>
      <h5 className="text-red-500 mb-3">{company}</h5>
      <p className="text-gray-400">{description}</p>
    </div>
  );


  return (
    <div id='resume' className="bg-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        
        <div>
          
          
          {/* Know Me More Section */}
          <div className="relative flex justify-center">
          <h2 className="text-gray-500 text-[150px] font-bold absolute -top-20 opacity-20">
            SUMMARY
          </h2>
            <h3 className="text-3xl font-bold mb-12 pt-8">
              Resume
              <div className="w-12 h-0.5 bg-red-500 mt-2"></div>
            </h3>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">My Education</h3>
              {education.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">My Experience</h3>
              {experience.map((item, index) => (
                <TimelineItem key={index} {...item}  />
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">My Skills</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div 
                      className="h-full bg-red-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

            {/* CV Buttons */}
      <div className="flex justify-center gap-4 mt-16">
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download CV
        </button>
        
        <button 
          onClick={handleOpenCV}
          className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Open CV
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;