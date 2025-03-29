import React from 'react';
import useScrollAnimation from '../config/useScrollAnimation';
import arrow from '../assets/icons/arrow.png';

const projectInfo = [
  {
    name: 'Davis Ayomide Portfolio',
    description: 'Built and deployed a professional personal portfolio, with good and creative design having a nice-looking UI.',
    link: 'https://davisayomide.netlify.app',
    languages: ['JavaScript', 'HTML', 'React JS', 'Tailwind CSS']
  },
  {
    name: 'ShopiBag',
    description: 'Built a full-stack website for trading clothes and cosmetics, with a well-organized database, user authentication, and a good API.',
    link: '',
    languages: ['JavaScript', 'Node.js/Express', 'React JS', 'Tailwind CSS']
  },
  {
    name: 'Memory Lane',
    description: 'Built a user-friendly website designed to help capture and cherish meaningful moments.',
    link: 'https://memorylane-vaq6.onrender.com',
    languages: ['JavaScript', 'HTML', 'React JS', 'Tailwind CSS']
  },
  {
    name: 'LucidXPay',
    description: 'A web3 landing page, an innovative web3 payment solution offering cutting-edge digital cards for the decentralized economy.',
    link: 'https://lucidxpay.onrender.com',
    languages: ['JavaScript', 'HTML', 'Tailwind CSS']
  },
  {
    name: 'AffyMart',
    description: 'Created a landing page to promote a project, AffyMart, an e-commerce website with a user-friendly UI.',
    link: 'https://affymart.onrender.com/landingPage.html',
    languages: ['JavaScript', 'HTML', 'React JS', 'CSS']
  }
];

const Project = () => {
  useScrollAnimation('hidden-project', 'show-project');

  return (
    <div id='projects' className='w-full h-auto mt-10 p-3'>
      <h1 className='text-4xl font-bold mb-5'>Projects</h1>
      <p>Showcasing recent projects I've worked on</p>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full h-full gap-4 sm:grid-cols-1'>
        {projectInfo.map((project, index) => (
          <div key={index} className='hidden-project w-full h-auto bg-red-200 rounded-md p-5 mt-5 space-y-5'>
            <p className='lg:text-4xl md:text-3xl text-2xl font-bold text-red-500'>{project.name}</p>
            <p className='lg:text-2xl md:text-2xl text-xl'>{project.description}</p>
            {project.languages.map((language, index) => (
              <div key={index} className='lg:text-2xl md:text-2xl text-xl text-white px-3 italic'>
                <p>{language}</p>
              </div>
            ))}
            <div className='flex gap-1'>
              <a href={project.link} target='_blank' className='text-white'>View Project</a>
              <img src={arrow} alt="Arrow" className='w-[15px] h-[15px] rotate-5' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
