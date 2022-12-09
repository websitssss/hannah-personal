import React from 'react'
import feature from "/public/images/featuretwo.png"
import Image from 'next/image'
import { BsCheck } from "react-icons/bs";

function Featuretwo() {
  return (
    <section className='mt-4 flex flex-col md:flex-row lg:px-60 md:mt-24'>
        <div className='flex flex-col md:w-1/2'>
            <h1 className='md:mt-24 text-lg md:text-3xl font-Playfair font-semibold'>
                What makes me your <span className='text-orange-300 font-bold'>Ideal Agent</span></h1>

                <div className=' flex flex-row px-8 md:mt-16 mt-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-orange-400 -mt-[16px] mr-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <p className='text-sm md:text-lg font-Raleway text-justify '>  It takes something special to rank in the top-producing of real estate professionals in San Luis Obispo County. Hannah Kraft, Director of Operations of Invest SLO Realty Group, has earned that distinction with proactive marketing, skillful negotiation, and peerless client relationships.  </p>
            </div>

            <div className=' flex flex-row px-8 mt-8 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400 mr-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <p className='text-sm md:text-lg font-Raleway text-justify '> Hannah has successfully serviced in closing over $50 million in sales across her first year in real estate.  </p>
            </div>

            <div className=' flex flex-row px-8 mt-8 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400 mr-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <p className='text-sm md:text-lg font-Raleway text-justify '> With intimate knowledge of San Luis Obispo County and Santa Barbara County, her insight and practice came naturally.  </p>
            </div>

            <div className=' flex flex-row px-8 mt-8 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 -mt-3 text-orange-400 mr-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <p className='text-sm md:text-lg font-Raleway text-justify '> Born and raised in Santa Barbara County, Hannah continued her education earning a Bachelor of Science Degree specializing in Business, Marketing, Public Relations, and Advertising at Northern Arizona University.   </p>
            </div>

            <div className=' flex flex-row px-8 mt-8 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-400 mr-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <p className='text-sm md:text-lg font-Raleway text-justify '> Hannah now specializes in residential and off-market real estate, serving her clients with her extensive market knowledge and unmatched devotion to her clients. </p>
            </div>

            <div className=' flex flex-row px-8 mt-8 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-400 mr-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <p className='text-sm md:text-lg font-Raleway text-justify '>Hannah continues to engage with her community as an active member of the San Luis Obispo Chamber of Commerce, the National Association of Home Builders, and Active Church.</p>
            </div>

            </div>
        <div className='flex flex-col md:w-1/2'>
            <Image src={feature} alt='featuretwo'/>
            </div>
    
    </section>
  )
}

export default Featuretwo