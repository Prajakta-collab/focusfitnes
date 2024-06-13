import React, { useState, useEffect } from 'react';

const TimeTracker = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isCheckedIn) {
      timer = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCheckedIn]);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    setStartTime(Date.now() - elapsedTime);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    const fiveHoursInMilliseconds = 5 * 60 * 60 * 1000;
    return Math.min((elapsedTime / fiveHoursInMilliseconds) * 100, 100);
  };

  return (
    <div className=" p-8  mt-40">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl mx-auto">
        <div className="text-5xl font-bold text-center mt-4">
          {formatTime(elapsedTime)}
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
        <div className="mt-2 text-center text-gray-700 text-xl">
          Shift Time: 7 to 12 AM
        </div>
        <button
          onClick={isCheckedIn ? handleCheckOut : handleCheckIn}
          className="bg-[orangered] text-white py-4 px-8 rounded-full text-xl font-bold hover:bg-gray-300 hover:text-black transition duration-300 mt-4 block mx-auto"
        >
          {isCheckedIn ? 'Check Out' : 'Check In'}
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
