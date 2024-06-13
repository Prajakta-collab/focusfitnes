import React from 'react'

const Card = ({ title, number, icon }) => {
    
    return (
    <div className="bg-white shadow-lg rounded-lg p-6 mx-4 my-2 flex-1 flex flex-col items-center">
      <div className="text-5xl font-bold mb-3">{icon}</div>
      <div className="text-2xl text-gray-700 mb-3">{number}</div>
      <div className="text-xl text-gray-700">{title}</div>
    </div>
  )};
export default Card