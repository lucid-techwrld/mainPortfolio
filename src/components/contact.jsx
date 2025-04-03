import React from 'react'
import mail from '../assets/icons/mail.png'
import phone from '../assets/icons/phone.png'
import whatsapp from '../assets/icons/whatsapp.png'
import location from '../assets/icons/location.png'
import cv from '../assets/doc/davisayomidecv.pdf'



const contact = () => {
  return (
    <div id='contact'>
        <div className='bg-red-200 w-full h-full flex flex-col justify-center items-center space-y-10 p-5 mt-4'>
          <a href={cv} className='animate-bounce text-2xl font-extrabold' download='Davis-Ayomide-CV.pdf'>DOWNLOAD CV</a>
          <h2 className='text-xl text-center font-sans italic text-gray-600'>I can help you design, improve <br />or build the product  experience <br /> for your new or existing products.<br />Feel free to get in touch with me</h2>
            <p className='text-2xl'>Do You Have Any Idea?</p>
            <div className='text-xl flex flex-col justify-center items-center gap-7 text-gray-500'>
              <img src={mail} alt={mail} className='w-[30px] h-[20px]'/>
              <a href="mailto: lucidtechwrld9@gmail.com"> lucidtechwrld9@gmail.com</a>
              <img src={phone} alt={phone} className='w-[30px] h-[30px]'/>
              <a href="tel:+2348082926609">08082926609</a>
              <img src={whatsapp} alt={whatsapp} className='w-[30px] h-[30px]'/>
              <a href="http://wa.me/+2347085948512" target="_blank" rel="noopener noreferrer">07085948512</a>
              <img src={location} alt={location} className='w-[30px] h-[30px]'/>
              <p>00.00.00.00</p>
            </div>
        </div>
    </div>
  )
}

export default contact