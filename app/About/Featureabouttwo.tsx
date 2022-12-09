import React from 'react'
import Image from 'next/image'
import feature from "/public/images/InvestSLo.png"

function Features() {
  return (
    <>
    <section className='flex flex-col md:flex-row lg:px-60 mt-24'>
    <div className='flex flex-col md:w-1/2 lg:ml-48 xl:ml-64 md:text-left text-center '>
            <h1 className='text-4xl font-Playfair font-bold md:mt-4'> InvestSLO </h1>
                <div className=' flex flex-row mt-8 '>
            <p className='font-Raleway text-justify md:w-3/4 px-10 text-[#3d3d3d] '>  At Invest SLO, we prioritize many things, but nothing more than our communication and availability. We score in our unflinching investment focus, community enrichment, and tech savvy. Plus, our unwavering presence provides peace of mind. This multifaceted approach has placed us in the top 1% of Realtors® on the Central Coast.</p>
            </div>
            </div>    

    <div className='flex flex-row  md:flex-col md:w-2/3 md:-ml-32 md:-mt-16 mt-2 justify-center  '>
    <Image className='rounded-md ' src={feature} alt='featuretwo'/>
            </div>

       
    </section>
    </>    
  )
}

export default Features