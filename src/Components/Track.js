import React from 'react'
import { FaCalendarDay, FaFire } from 'react-icons/fa';

const Track = () => {
  return (
    <div id="track" className="container mx-auto p-5 mt-40">
      {/* Tracking Cards */}
      <div className="flex flex-col md:flex-row justify-around mb-10 gap-5">
      <div className="flex items-center bg-white shadow-lg rounded-lg p-5 w-full md:w-1/3">
        <FaCalendarDay className="text-5xl text-orange-500 mr-4" />
        <div>
          <h2 className="text-xl font-bold font-sans">Present Days</h2>
          <p className="text-gray-600 text-lg font-sans">Details about present days</p>
        </div>
      </div>
      <div className="flex items-center bg-white shadow-lg rounded-lg p-5 w-full md:w-1/3">
        <FaFire className="text-5xl text-orange-500 mr-4" />
        <div>
          <h2 className="text-xl font-bold font-sans">Max Streak</h2>
          <p className="text-gray-600 text-lg font-sans">Details about max streak</p>
        </div>
      </div>
    </div>
     
    </div>
  );
};



export default Track
