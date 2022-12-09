import Image from 'next/image'
import React from 'react'
import feature from "/public/images/feature.png"

function Feature() {
  return (
    <>
    <div className='relative'>
        <Image className='w-full' 
        src={feature}
        alt='feature'
        />
        <div className='absolute -top-[10px] xl:top-1/4 left-1/2 text-center translate-y-1/2'>
          <h1 className='text-xs md:text-2xl lg:text-3xl xl:text-4xl font-Playfair w-[70%] text-[#3d3d3d] font-bold '>
           &quot;Helping you Find the Perfect Home, One key at a Time.&quot;
           </h1>
           <p className='mt-4 text-[8px] md:text- lg:text-lg xl:text-xl font-Raleway w-[70%] text-[#3d3d3d] '>
           Experience the difference with us - your trusted real estate partner.
           </p>
        </div>
    </div>
    </>    
  )
}

export default Feature