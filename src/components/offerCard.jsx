import React from 'react'

const OfferCard = ({ head, icon, text }) => {
  return (
    <>
      <div className='w-full h-32 flex flex-col bg-orange-400 border-2 border-white p-2 rounded-se-3xl text-sm md:text-xl lg:text-xl relative text-white hover:-translate-y-1 transition-all'>
        <div className=''>
          <h2 className='font-bold text-xl text-black'>{head}</h2>
          <p className='flex-1 text-xs lg:text-sm'>{text}</p>
        </div>
      </div>
    </>
  )
}

export default OfferCard