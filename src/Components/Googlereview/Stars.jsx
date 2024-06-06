import React from "react";


const Stars = ({ rating }) => {

  const filledStars = Math.floor(rating);
  const remainder = rating % 1;
  var filledPercentage =  Math.round(Math.floor(remainder * 100)/10)*10;

  const Star = ({ filled, empty }) => (
    <span
      className={`text-2xl	 w-7
       ${filled ? `${empty? "text-white dark:text-gray-400": "text-yellow-500" }` : `text-transparent bg-gradient-to-r bg-clip-text  from-yellow-500 from-10% via-transparent via-${filledPercentage}% to-transparent to-100%`}`}
    >★</span>
  );

  return (
    <>
      <div className='flex items-center'>  {[...Array(filledStars)].map((index) => (
        <Star  filled={true} empty={false} />
      ))}
      
      {!remainder==0 && <Star filled={false}   />}

      {[...Array(5 - filledStars - (remainder > 0 ? 1 : 0))].map((index) => (
        <Star  filled={true} empty={true} />
      ))} </div>
     
    </>
  );
};

export default Stars;
