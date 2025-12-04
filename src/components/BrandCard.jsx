import React from 'react'

function BrandCard({img}) {
  return (
    <div className='w-[100px] h-[50px] mx-5'>
      <img src={img} className='w-full h-full object-cover' alt="" />
    </div>
  )
}

export default BrandCard
