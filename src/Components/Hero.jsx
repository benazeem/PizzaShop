import { useState, useEffect } from 'react'
import {ThemeBtn} from "./index.js"

function Hero() {
  return (
    <>
    <div className='w-full h-10 absolute top-0'  id="head"></div>
    <div className='w-full  bg-hero-bg-day dark:bg-hero-bg-night bg-cover bg-[center_center] bg-no-repeat'>
     <div className='w-full flex flex-col bg-black dark:bg-opacity-60 bg-opacity-20 py-2 px-4'>
      <div className=' flex justify-end items-center py-2 p-2'>
        <ThemeBtn/> </div>
        <div className='flex flex-col items-start lg:w-1/2'>
          <h2 className='text-xl sm:text-4xl font-medium text-green-500 dark:text-yellow-400' >Welcome to Eat & Greet Pizza</h2>
        <h3 className='text-white font-medium text-lg	sm:text-3xl py-1 sm:py-2' >Where Every Bite Tells a Story</h3>
        <p  className='text-white font-normal text-sm mb-4 	sm:text-base  sm:py-2 '>           At Eat & Greet Pizza, we're not just about making great pizza we're about creating unforgettable experiences. From the moment you walk through our doors, you're greeted with the aroma of freshly baked dough, the sizzle of savory toppings, and the warmth of genuine hospitality. Join us for a culinary journey where every bite tells a story of passion, flavor, and connection.</p>
     </div></div> </div>
    </>
  )
}

export default Hero
