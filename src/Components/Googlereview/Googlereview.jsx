import React, { useState, useEffect } from 'react';
import Stars from './Stars';
import Testimonial from '../Testimonials/Testimonial';
import useMap from '../../Hooks/useMap';



// Main component
const Googlereview = () => {
  const mapdata = useMap();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState(0);


  
  useEffect(() => {
   
    if (mapdata && mapdata.data) {
      setRating(mapdata.data.rating);
      setReview(mapdata.data.review_count);
    } else {
      setRating(4);
      setReview(50);
    }
  }, [mapdata]);

  return (
    <> 
    <div className='m-4'>
    <div className='flex justify-center md:justify-evenly items-center  bg-stone-100 dark:bg-zinc-800 my-4 px-4 rounded-lg'>
    <div className='flex items-center'>   <div className='text-black dark:text-white my-1 text-lg font-medium mx-2'>{rating}</div>
       <Stars rating={rating} /> </div>
       <div className=' items-center hidden md:flex'> 
       <img src="https://raw.githubusercontent.com/benazeem/PizzaShop/58c07c15bb5a4091bd068b341ec82b807de6af1a/src/assets/Map.svg" alt="Map" className="h-10" />
       <p className='text-black dark:text-white text-lg font-medium'> Eat and Greet</p>
       </div>
      <div className=' flex items-center text-green-500 dark:text-yellow-500 my-1 text-lg font-medium mx-2' >{review}+ <p className='text-black dark:text-white'>&nbsp;Reviews</p></div>
    </div>
    </div>
    </>
  );
};

export default Googlereview;
