import React from 'react'
import { useState, useEffect } from 'react'
import LUCID from '../assets/images/lucud-pic2.png'
import menu from '../assets/icons/menu.png'
import close from '../assets/icons/cancel.png'




function header() {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(()=> {
    const menuNav = document.getElementById('showMenu')
    openMenu ? menuNav.classList.remove('hidden') : menuNav.classList.add('hidden')
  }, [openMenu])
 
  
  return (
    <>
      <header className='blur-bg z-10 shadow-lg flex justify-between items-center px-5'>
        <div className='flex justify-between items-center gap-3'>
          <img src={LUCID} alt={LUCID} className=' w-[50px] h-[50px]' />
          <h2 className='animate__animated animate__bounce text-2xl text-red-500 lg:text-4xl font-bold'>DAVIS AYOMIDE</h2>
        </div>
        <div className='flex text-black text-2xl font-bold'>
          <img id='menu' src={openMenu ? close : menu} alt={menu} className='w-[30px] h-[30px] lg:hidden md:hidden ' onClick={()=> {
            setOpenMenu(!openMenu)
          }}/>
          <ul id='menu-links' className='md:flex lg:flex justify-between items-center gap-5 hidden'>
            <li className='underline-hover'><a href="#about">About</a></li>
            <li className='underline-hover'><a href="#contact">Contact</a></li>
            <li className='underline-hover'><a href="#projects">Projects</a></li>
            <li className='underline-hover'><a href="#services">Services</a></li>
          </ul>
        </div>
      </header>
      <nav id='showMenu' className='lg:hidden md:hidden top-0 right-0 fixed hidden z-20'>
        <ul className='w-[200px] h-svh bg-transparent backdrop-blur-md px-5 py-7 space-y-7 text-2xl relative'>
           <img id='menu' src={openMenu ? close : menu} alt={menu} className='w-[30px] h-[30px] right-3 absolute z-30' onClick={()=> {
                      setOpenMenu(!openMenu)
              }}/>
          <li className=' hover:text-gray-700 mt-10'><a href="#about" onClick={()=> {setOpenMenu(!openMenu)}}>About</a></li>
          <li className=' hover:text-gray-700' onClick={()=> {setOpenMenu(!openMenu) }}><a href="#contact">Contact</a></li>
          <li className=' hover:text-gray-700' onClick={()=> {setOpenMenu(!openMenu)}}><a href="#projects">Projects</a></li>
          <li className=' hover:text-gray-700' onClick={()=> {setOpenMenu(!openMenu)}}><a href="#services">Services</a></li>
        </ul>
      </nav>  
    </>
  )
}

export default header