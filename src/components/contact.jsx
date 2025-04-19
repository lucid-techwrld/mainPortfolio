import React from 'react'
import cv from '../assets/doc/davisayomidecv.pdf'
import { FaPhone } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";



const contact = () => {
  return (
    <div id='contact'>
        <div className='bg-slate-800 w-full h-full flex flex-col justify-center items-center space-y-10 p-5 text-orange-400'>
          <a href={cv} className='animate-bounce text-2xl font-extrabold' download='Davis-Ayomide-CV.pdf'>DOWNLOAD RESUME</a>
          <h2 className='text-xl text-center font-sans italic text-white'>I can help you design, improve <br />or build the product  experience <br /> for your new or existing products.<br />Feel free to get in touch with me</h2>
            <p className='text-2xl'>Do You Have Any Idea?</p>
            <div className='text-xl flex flex-col justify-center items-center gap-7 text-white'>
              <a href="mailto: lucidtechwrld9@gmail.com"> lucidtechwrld9@gmail.com</a>
              <IoMail/>
              <a href="tel:+2348082926609">08082926609</a>
              <FaPhone/>
              <a href="http://wa.me/+2347085948512" target="_blank" rel="noopener noreferrer">07085948512</a>
              <FaWhatsapp/>
              <p>Ikorodu, Lagos State, Nigeria</p>
              <IoLocation/>
            </div>
        </div>
    </div>
  )
}

export default contact