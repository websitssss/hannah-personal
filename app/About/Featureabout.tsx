import React from 'react'
import Image from 'next/image'
import feature from "/public/images/hannah.jpg"

function Feature() {
  return (
    <>
    <section className='flex flex-col md:flex-row lg:px-60 mt-24'>

    <div className='flex flex-col md:w-1/2 justify-center '>
            <div className='flex flex-row justify-center'><Image className='h-[400px] w-[250px] lg:ml-48 xl:ml-64 rounded-md' src={feature} alt='featuretwo'/></div>
            </div>

        <div className='flex flex-col text-center md:text-left md:w-1/2'>
            <h1 className='md:mt-24 mt-4 text-4xl font-Playfair italic'>
                Hello there! </h1>
            <h1 className='text-4xl font-Playfair font-bold md:mt-4'> I&apos;m Hannah! </h1>

            <div className=' flex flex-col md:flex-row mt-8 px-10'>
            <p className='font-Raleway text-justify md:w-3/4 text-[#3d3d3d] '>  Whether you're a first-time home buyer or a seasoned investor, I'm here to provide you with the personalized service and attention you deserve. I'm dedicated to achieving your goals and ensuring a successful and stress-free real estate transaction. When you work with me, you can trust that you're in good hands.</p>
            </div>
            </div>    
    </section>
    </>    
  )
}

export default Feature