import React from 'react'
import { useState, useEffect } from 'react'
import { MdMenu } from 'react-icons/md'
import { FaTimes } from 'react-icons/fa'
import logo from '../assets/icons/DAVIS-AYOMIDE-LOGO.png'



function header() {

  const [openMenu, setOpenMenu] = useState(false)

  
  return (
    <>
      <header className='bg-slate-800 shadow-lg flex justify-between items-center px-5 fixed w-full h-20 md:h-24 lg:h-24 top-0 z-10'>
        <div className='flex justify-between items-center gap-3'>
          <img src={logo} alt='' className='w-[50px] h-[50px]' />
          <h2 className='text-2xl text-orange-400 lg:text-4xl font-bold'><span className='text-white'>DAVIS</span>  AYOMIDE</h2>
        </div>
        <div className='flex text-white text-sm font-bold'>
          <MdMenu className="text-3xl lg:hidden md:hidden" onClick={()=> {
                setOpenMenu(!openMenu)
            }}/>
          <ul id='menu-links' className='md:flex lg:flex justify-between items-center gap-5 hidden'>
            <li className='underline-hover'><a href="#about">About</a></li>
            <li className='underline-hover'><a href="#contact">Contact</a></li>
            <li className='underline-hover'><a href="#projects">Projects</a></li>
            <li className='underline-hover'><a href="#services">Services</a></li>
            <button className='bg-orange-400 hover:bg-orange-300 rounded-md font-bold px-3 py-2'>Hire Me</button>
          </ul>
        </div>
      </header>
      <div className={`lg:hidden md:hidden w-1/2 h-full fixed text-white bg-slate-800 right-0 top-0 z-50 transition-transform duration-300 ease-in-out ${openMenu? 'translate-x-0': 'translate-x-full'}`}>
          <ul className='w-full h-svh bg-transparent backdrop-blur-md px-5 py-7 space-y-7 text-sm relative'>
            <FaTimes className='right-3 absolute z-30 text-3xl text-white' onClick={() => setOpenMenu(!openMenu)}  />
            <li className=' hover:text-gray-700 mt-10'><a href="#about" onClick={()=> {setOpenMenu(!openMenu)}}>About</a></li>
            <li className=' hover:text-gray-700' onClick={()=> {setOpenMenu(!openMenu) }}><a href="#contact">Contact</a></li>
            <li className=' hover:text-gray-700' onClick={()=> {setOpenMenu(!openMenu)}}><a href="#projects">Projects</a></li>
            <li className=' hover:text-gray-700' onClick={()=> {setOpenMenu(!openMenu)}}><a href="#services">Services</a></li>
            <button className='bg-orange-400 hover:bg-orange-300 rounded-md font-bold px-3 py-2'>Hire Me</button>
        </ul>
      </div>
         
    </>
  )
}

export default header