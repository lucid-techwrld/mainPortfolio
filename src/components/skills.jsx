import React from 'react';
import useScrollAnimation from '../config/useScrollAnimation';

const skillArray = [
  'Html', 'Css', 'JavaScript', 'React Js', 'Next.js',
  'Tailwind CSS', 'Node.js/Express', 'MongoDB',
  'Photoshop', 'Figma', 'CorelDraw', 'Git', 'GitHub'
];

const Skills = () => {
  useScrollAnimation('hidden-skill', 'show-skill');

  return (
    <div id='services' className='w-full h-auto mt-5 p-3'>
      <div className='bg-red-100 w-full h-auto rounded p-5'>
        <p className='text-2xl text-red-500'>Expertise</p>
        <h1 className='text-4xl font-bold text-white'>Technical Proficiency</h1>
        <span className='font-extrabold text-red-500'>____</span>
        <p className='text-sm text-black'>A comprehensive toolkit refined through years of practical experience</p>
        <div className='w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
          {skillArray.map((skill, index) => (
            <div key={index} className='hidden-skill text-white font-semibold text-xl w-full bg-red-300 rounded-md py-5 px-10 mt-5 flex flex-col relative z-0'>
              <span className='font-extrabold'>{skill}</span>
              <span className='font-extrabold text-red-500 absolute bottom-2'>____</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
