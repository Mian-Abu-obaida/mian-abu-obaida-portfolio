import React, { useState } from 'react';
import PorjectIamge1 from '../assets/images/project-1.jpg';
import PorjectIamge2 from '../assets/images/project-2.jpg';
import PorjectIamge3 from '../assets/images/project-3.jpg';
import PorjectIamge4 from '../assets/images/project-4.jpg';
import PorjectIamge5 from '../assets/images/project-5.jpg';
import PorjectIamge6 from '../assets/images/project-6.jpg';
import PorjectIamge7 from '../assets/images/project-7.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Project Title 1',
      image: PorjectIamge1,
      info: `Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
      details: {
        client: 'Alex Johnson',
        technologies: 'iOS, HTML5, CSS3, PHP, Java',
        industry: 'Art & Design',
        date: 'July 16, 2019',
        url: 'https://example.com',
      },
    },
    {
      id: 2,
      name: 'Project Title 2',
      image: PorjectIamge2,
      info: `Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
      details: {
        client: 'Ruby Clinton',
        technologies: 'React, Node.js, MongoDB',
        industry: 'Web Development',
        date: 'August 12, 2020',
        url: 'https://example.com',
      },
    },
    {
        id: 3,
        name: 'Project Title 3',
        image: PorjectIamge3,
        info: `Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
        details: {
          client: 'Ruby Clinton',
          technologies: 'React, Node.js, MongoDB',
          industry: 'Web Development',
          date: 'August 12, 2020',
          url: 'https://example.com',
        },
      },
      {
        id: 4,
        name: 'Project Title 4',
        image: PorjectIamge4,
        info: `Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
        details: {
          client: 'Ruby Clinton',
          technologies: 'React, Node.js, MongoDB',
          industry: 'Web Development',
          date: 'August 12, 2020',
          url: 'https://example.com',
        },
      },
      {
        id: 5,
        name: 'Project Title 5',
        image: PorjectIamge5,
        info: `Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
        details: {
          client: 'Ruby Clinton',
          technologies: 'React, Node.js, MongoDB',
          industry: 'Web Development',
          date: 'August 12, 2020',
          url: 'https://example.com',
        },
      },
      {
        id: 6,
        name: 'Project Title 6',
        image: PorjectIamge6,
        info: `Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
        details: {
          client: 'Ruby Clinton',
          technologies: 'React, Node.js, MongoDB',
          industry: 'Web Development',
          date: 'August 12, 2020',
          url: 'https://example.com',
        },
      },
      {
        id: 7,
        name: 'Project Title 7',
        image: PorjectIamge7,
        info: `Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.`,
        details: {
          client: 'Ruby Clinton',
          technologies: 'React, Node.js, MongoDB',
          industry: 'Web Development',
          date: 'August 12, 2020',
          url: 'https://example.com',
        },
      },
    // Add more projects as needed...
  ];

  const openProjectModal = (project) => {
    setActiveProject(project);
  };

  const closeProjectModal = () => {
    setActiveProject(null);
  };

  return (
    <div id='portfolio' className="bg-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
          {/* Know Me More Section */}
          <div className="relative flex justify-center">
          <h2 className="text-gray-500 text-[150px] font-bold absolute -top-20 opacity-20">
          PORTFOLIO
          </h2>
            <h3 className="text-3xl font-bold mb-12 pt-8">
              My Work
              <div className="w-12 h-0.5 bg-red-500 mt-2"></div>
            </h3>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{project.name}</h3>
            </div>
          ))}
        </div>

        {/* Modal for Active Project */}
        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg max-w-4xl w-full relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full rounded-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-4">{activeProject.name}</h2>
                  <p className="text-gray-300 mb-4">{activeProject.info}</p>
                  <h3 className="text-lg font-bold text-gray-200 mb-2">Project Details:</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li><strong>Client:</strong> {activeProject.details.client}</li>
                    <li><strong>Technologies:</strong> {activeProject.details.technologies}</li>
                    <li><strong>Industry:</strong> {activeProject.details.industry}</li>
                    <li><strong>Date:</strong> {activeProject.details.date}</li>
                    <li>
                      <strong>URL:</strong>{' '}
                      <a
                        href={activeProject.details.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:underline"
                      >
                        {activeProject.details.url}
                      </a>
                    </li>
                  </ul>
                  <h3 className="text-lg font-bold text-gray-200 mt-6">Share:</h3>
                  <div className='pt-8'>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-red-500 cursor-pointer" />
            </div>
      </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
