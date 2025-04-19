import React from 'react'
import OfferCard from './offerCard'
import { FaReact } from "react-icons/fa";


const Offer = () => {
  return (
  <>
    <h2 className='text-center text-white text-xl md:text-2xl lg:text-3xl '>Speciliazed In</h2>
      <p className='text-orange-400 text-center'>What I offer</p>
      <div className='w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 p-3'>
        <OfferCard
          head='React.js'
          icon={<FaReact/>}
          text='Builds fast, responsive UIs with modern components and smooth user experiences.'
        />
        <OfferCard
          head='Node.js'
          icon={<FaReact/>}
          text='Creates scalable server-side apps and APIs using JavaScript runtime.'
        />
        <OfferCard
          head='Frontend Development'
          icon={<FaReact/>}
          text='Designs clean, responsive interfaces with modern tools and frameworks.'
        />
        <OfferCard
          head='Backend Development'
          icon={<FaReact/>}
          text='Handles data, APIs, and server logic with secure and efficient code.'
        />
        <OfferCard
          head='Basic SEO'
          icon={<FaReact/>}
          text='Applies simple SEO techniques to improve site visibility and performance.'
        />
        <OfferCard
          head='MERN Stack'
          icon={<FaReact/>}
          text='Builds full-stack apps using MongoDB, Express, React, and Node.js'
        />
      </div>
  </>
  )
}

export default Offer