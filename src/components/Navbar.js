import React from 'react';
import logo from '../habit-logo.png';

const Navbar = () => {
  // Create a custom date string in the desired format
  const date = new Date().toDateString();

  return (
    <>
      <div className="flex justify-between items-center text-white w-full bg-gray-900 h-24 mx-auto px-16 md:px-8 sm:px-4">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" width="50" />
          <span className="ml-3 text-2xl font-bold sm:text-xl">
            Habit Tracker
          </span>
        </div>
        <div className="text-md sm:text-sm">{date}</div>
      </div>
      <div className="border border-solid border-gray-600" />
    </>
  );
};

export default Navbar;
