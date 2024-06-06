import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testcard from './Testcard.jsx'
import useMap from '../../Hooks/useMap.js'


function Testimonial() {
const data = useMap()
const loader = 'https://i.gifer.com/5Q0v.gif';

    var settings = {
        dots:  false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <> <div id='Review' className='mx-4 py-2 z-4'>
    <h2 className='text-2xl text-center font-medium text-green-500 dark:text-yellow-400 py-2 pb-6'>Testimonials</h2>
    {data && data.data ? (
        <Slider {...settings}>
          {data.data.reviews.map((review, index) => (
            <Testcard key={index} reviewData={review} />
          ))}
        </Slider>
      ) : (
       <div className='flex justify-center items-center p-4'> <img className='h-24 w-36 poiner-events-none ' src={loader} /> </div>
      )}
      </div>
    </>
  )
}

export default Testimonial