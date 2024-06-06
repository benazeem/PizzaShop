import React from "react";

function About() {
  return (
    <>
      <div className="pt-10" id="about">
        <h2 className="text-2xl text-center font-medium text-green-500 dark:text-yellow-400 py-4">
          About Us
        </h2>

        <div className="flex justify-evenly items-center">
        <img
            className=" hidden lg:block h-52 flex-none opacity-50 "
            src="./src/assets/Pizzanobg.png"
          ></img>
        <div className="flex justify-evenly items-center mx-5">
          <img
            className=" hidden sm:block h-52 flex-none rounded-lg mx-5"
            src="./src/assets/About-height.jpg"
          ></img>
          <p className=" text-black dark:text-white text-sm ">
            At Eat & Greet Pizza, we believe that great food brings people
            together. Our story begins with a passion for pizza and a commitment
            to creating memorable dining experiences for our community. Since
            2019, we've been serving up delicious pies made with the finest
            ingredients and a whole lot of heart
          </p>
        
          <div className="hidden sm:flex sm:flex-col w-72 lg:w-52 mx-5">
            <img
              className="h-20 w-full flex-none rounded-md"
              src="./src/assets/pizzza.jpg"
            ></img>
            <img
              className="mt-2 h-28  w-full flex-none rounded-md"
              src="./src/assets/pizzzaa.jpg"
            ></img>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
