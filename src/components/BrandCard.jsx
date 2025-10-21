import React from 'react'

function BrandCard({img}) {
  return (
    <div className='w-[200px] m-5'>
      <img src={img} className='w-full h-full object-cover' alt="" />
    </div>
  )
}

export default BrandCard
