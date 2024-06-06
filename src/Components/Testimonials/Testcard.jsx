import React,  { useState, useEffect } from 'react'



function Testcard(reviewData) {

   
  // console.log(reviewData);

  return (
   <>
   <div className='z-2 w-44 h-44 rounded-lg flex flex-col justify-evenly items-center p-2 bg-gradient-to-b from-stone-200 from-2% via-white via-44% to-stone-200 to-99%  dark:bg-gradient-to-b dark:from-zinc-800 dark:from-14% dark:via-neutral-700 dark:via-64% dark:to-neutral-900 dark:to-91%'>
    <p className='text-sm py-1 text-center  h-2/3 text-black dark:text-white'> {reviewData.reviewData.review_text} </p>
    <a href={reviewData.reviewData.review_link} ><span className='font-medium bottom-0 text-md text-nowrap h-1/3 text-black dark:text-white'>{reviewData.reviewData.user_name}</span> </a>
   </div>
   </>
  )
}

export default Testcard