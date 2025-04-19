import React from 'react'
import myImage from '../assets/images/lucud-pic2.png'
import cv from '../assets/doc/davisayomidecv.pdf'
import { FaAward } from "react-icons/fa";
import { TbFileStar } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

function heroSection() {

  return (
    <div className='mt-[80px] md:mt-[90px] lg:mt-[90px] w-full h-54 flex justify-center items-center relative'>
      <div className='w-full h-full flex flex-wrap justify-between items-center py-10 px-5 mb-14'>
        <div className='lg:w-1/2 md:w-1/2 w-full h-auto '>
          <div className='space-y-7 flex flex-col text-orange-400 font-bold text-xl lg:text-2xl md:text-xl'>
            <h1>Hello,</h1>
            <h2>I'm <span className='text-white text-xl font-semibold'> DAVIS AYOMIDE</span></h2>
            <p className='text-white'>Web Developer | Software Engineer | Mobile App Developer <br />Graphic Designer</p>
            <p className='bg-orange-400 rounded-full py-4 px-5 lg:text-4xl md:text-3xl text-center text-white w-full h-1/2 text-xl'>3.9+ Years Experience</p>
            <a href={cv} download={cv} className='mt-10 outline outline-none text-white border-4 border-white font-bold text-xl w-full h-20 rounded-full hover:border-white hover:text-white p-5 text-center '>DOWNLOAD RESUME</a>
          </div>
        </div>
        <div className='lg:w-1/2 md:w-1/2 w-full h-auto flex items-center justify-center'>
          <img src={myImage} alt="my-picture" className='w-[400px} h-[400px]'/>
        </div>
      </div>
      <div className='absolute w-[95%] h-20 border-3 rounded-full bg-slate-900 grid grid-cols-3 bottom-0 text-white py-3 px-5 gap-2 '>
        <div className='border-r-2 border-white w-full h-full flex gap-2 items-center text-xs lg:text-xl md:text-xl'>
          <div className=' bg-orange-400 rounded-full p-2 md:p-3 lg:p-4'>
            <FaAward className='text-xl md:text-2xl lg:text-2xl'/>
          </div>
          <div>
            <p className='font-bold'>4 Years Job </p>
            <p className='text-orange-400'>Experience</p>
          </div>
        </div>
        <div className='border-r-2 border-white w-full h-full flex gap-2 items-center text-xs lg:text-xl md:text-xl'>
          <div className=' bg-orange-400 rounded-full p-2 md:p-3 lg:p-4'>
            <TbFileStar className='text-xl md:text-2xl lg:text-2xl'/>
          </div>
          <div>
            <p className='font-bold'>8+ Projects</p>
            <p className='text-orange-400'>Completed</p>
          </div>
        </div>
        <div className='w-full h-full flex gap-2 items-center text-xs lg:text-xl md:text-xl'>
          <div className=' bg-orange-400 rounded-full p-2 md:p-3 lg:p-4'>
            <MdSupportAgent className='text-xl md:text-2xl lg:text-2xl'/>
          </div>
          <div>
            <p className='font-bold'>Support </p>
            <p className='text-orange-400'>Online 24/7</p>
          </div>
        </div>
      </div> 
    </div>
  )
}


export default heroSection