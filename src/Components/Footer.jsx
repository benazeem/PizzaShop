import React from 'react';
import Phoneicon from '../assets/Phone.jsx';
import Clock from '../assets/Clock.jsx';
import InstaIcon from '../assets/InstaIcon.jsx';

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className="h-auto w-full flex bg-gradient-to-b from-zinc-300 to-white dark:bg-gradient-to-b dark:from-[rgba(221,219,219,0.2)] dark:to-[rgba(255,255,255,0.2)]">
        <div className="container my-1 mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 '>
            <div className='h-34 w-full hidden sm:block'>
              <iframe 
                className='rounded-md' 
                width="100%"  
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Shop%20no:%209,%20Shivam%20Plaza,%20Block%20E,%20Delta-1,%20Greater%20Noida,%20Brahmpur%20Rajraula%20Urf%20Nawada,%20Uttar%20Pradesh%20201310+(Eat%20&amp;%20Greet%20Pizza)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
          </div>
          <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 flex flex-col items-center py-4 space-y-2'>
            <div className="flex items-center pt-2">
             <Phoneicon css={`fill-green-500 dark:fill-yellow-500 mr-1`} />
             <a href='tel:+918929722006'> <span className="text-lg text-black hover:underline dark:text-white">+918929722006</span> </a>
            </div>
            <div className="flex items-center">
              <Clock css={`fill-green-500 dark:fill-yellow-500 mr-1 `} />
              <span className="text-lg text-black dark:text-white">10:30 am–11:30 pm</span>
            </div>
            <div className="flex items-center">
              <InstaIcon css={`fill-green-500 dark:fill-yellow-500 mr-1 `} />
              <a href='https://www.instagram.com/eat_and_greet_/'><span className="text-lg hover:underline text-black dark:text-white">@eat_and_greet_</span></a>
            </div>
          </div>
          <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 flex flex-col items-center pt-2 sm:border-t-0 border-t-2	border-gray-500	border-solid	 '>
            <h4 className='text-black dark:text-white text-xl font-bold'>Our Partners</h4>
            <div className="flex items-center justify-center py-3">
             <a target="_blank" href='https://www.zomato.com/ncr/eat-greet-pizza-delta-1-greater-noida/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D'> <img src="https://raw.githubusercontent.com/benazeem/PizzaShop/58c07c15bb5a4091bd068b341ec82b807de6af1a/src/assets/Zomato.svg" alt="Zomato" className="h-10 w-10 mr-4" /> </a>
             <a  target="_blank" href='https://www.swiggy.com/restaurants/eat-and-greet-pizza-bishrakh-greater-noida-noida-1-748017?query=Pizza'> <img src="https://raw.githubusercontent.com/benazeem/PizzaShop/58c07c15bb5a4091bd068b341ec82b807de6af1a/src/assets/swiggy.svg" alt="Swiggy" className="h-10 w-10" /> </a>
            </div>
            <a target='_blank' href='https://www.zomato.com/ncr/eat-greet-pizza-delta-1-greater-noida/order'><button id='order' className="text-base font-bold py-2 px-4 mb-3 rounded bg-green-500 text-white dark:text-black dark:bg-yellow-500">
              ORDER NOW
            </button></a>
          </div>
        </div>
      </div>
      <div className="h-10 w-full bg-green-500 dark:bg-yellow-500 flex flex-col justify-center px-4">
        <div className='flex items-center justify-between'>
          <p className="text-white dark:text-black text-md text-wrap flex">
            Copyrights @2024<span className='hidden md:block'>: All Rights Are Reserved By Eat & Greet</span>
          </p>
          <a href="#" className="text-white dark:text-black hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
