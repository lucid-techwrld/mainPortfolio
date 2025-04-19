import React from 'react'
import OfferCard from './offerCard'

const Offer = () => {
  return (
    <div className='w-full h-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
      <OfferCard
        header='hello'
        icon='hi'
        text='passing prop'
      />
    </div>
  )
}

export default Offer