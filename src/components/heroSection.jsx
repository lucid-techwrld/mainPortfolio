import React from 'react'
import myImage from '../assets/images/lucud-pic2.png'
import cv from '../assets/doc/davisayomide cv.pdf'

function heroSection() {

  return (
    <div className='mt-[90px] py-10 px-5 w-full h-auto flex flex-wrap justify-between items-center'>
      <div className='lg:w-1/2 md:w-1/2 w-full h-full'>
        <div className='space-y-7 text-2xl flex flex-col'>
          <h1>Hello,</h1>
          <h2>I'm <span className='text-red-500 text-4xl font-semibold'>DAVIS AYOMIDE</span></h2>
          <p>Web Developer | Software Engineer | Mobile App Developer <br />Graphic Designer</p>
          <p className='bg-red-500 rounded-full py-4 px-5 lg:text-4xl md:text-3xl text-center text-white w-full h-1/2 text-2xl'>3.7+ Years Experience</p>
          <a href={cv} download={cv} className='mt-10 outline outline-red-500 text-red-500 font-bold text-2xl w-full h-20 rounded-full hover:bg-red-500  hover:text-white p-5 text-center'>DOWNLOAD CV</a>
        </div>
      </div>
      <div className='lg:w-1/2 md:w-1/2 w-full h-full flex items-center justify-center'>
        <img src={myImage} alt="my-picture" className='w-fit h-full'/>
      </div>
    </div>
  )
}

export default heroSection