import React from 'react'

function Whyus() {
  return (
    <>
    <div className='m-4 px-0 md:px-6 lg:px-10 xl:px-20'>
        <h2 className='text-2xl font-medium text-center text-green-500 dark:text-yellow-400 py-2'>Why Choose Us</h2>

        <div className='flex items-center justify-between my-4 '>
        <div className='flex flex-col justify-center items-center'>  <div className='flex flex-col justify-center items-center' ><img className='h-12 w-12' src='./src/assets/menu.svg'></img>
          <h3 className='text-md md:text-lg font-medium text-black dark:text-white'>Easy to Order</h3>
          </div>
          <div className='flex flex-col pt-3 justify-center items-center'>
          <span className='text-2xl md:text-3xl font-medium text-black dark:text-white' >10+</span>
          <p className='text-xs md:text-sm font-medium text-green-500 dark:text-yellow-400' >Unique Flavours</p>
          </div> </div>

          <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center' >
            <img className='h-12 w-12' src='./src/assets/maps.svg'></img>
          <h3 className='text-md md:text-lg font-medium text-black dark:text-white' >Live Order</h3>
          </div>
          <div className='flex flex-col pt-3 justify-center items-center'>
          <span className='text-2xl md:text-3xl font-medium text-black dark:text-white' >200+</span>
          <p className='text-xs md:text-sm font-medium text-green-500 dark:text-yellow-400'>Trusted Clients</p>
          </div> </div>

          <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <img className='h-12 w-12' src='./src/assets/organic.svg'></img>
          <h3 className='text-md md:text-lg font-medium text-black dark:text-white' >100% Organic</h3>
          </div>
          <div className='flex pt-3 flex-col justify-center items-center'>
          <span className='text-2xl md:text-3xl font-medium text-black dark:text-white' >1000+</span>
          <p className='text-xs md:text-sm font-medium text-green-500 dark:text-yellow-400' >Order Completed</p>
          </div> </div>
          
        </div> </div>

        
        
    </>
  )
}

export default Whyus