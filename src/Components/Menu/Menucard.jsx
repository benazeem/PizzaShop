import React from 'react';

function MenuCard({Name, Image, Price, Star}) {
 

  return (
    <>
      <div className='h-56 w-40 bg-neutral-300 dark:bg-zinc-800 rounded-xl flex flex-col justify-center items-center'>
     
      <div className='h-2/3'>  <img src={Image} className='h-32 w-32 rounded-lg'></img>
      </div>

<div className='flex flex-col justify-center items-center h-1/3'>      
<h4 className='pl-1 text-wrap  text-black dark:text-white h-2/3'>{Name}</h4>
      <div className='flex flex-row justify-evenly items-center pb-1 h-1/3'>
      <div className={`h-4 w-4 rounded-xl bg-green-500`}></div>
        <p className='text-black dark:text-white pl-1 pr-6'>₹{Price}</p>
        <p className='text-black dark:text-white'><span className='text-yellow-500 text-lg'>★</span>{Star}</p>
        </div> 
      </div>
      </div>
    </>
  );
}

export default MenuCard;
