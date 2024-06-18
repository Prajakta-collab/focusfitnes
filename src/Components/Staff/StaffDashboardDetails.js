import React from 'react';
import { FaUsers, FaClock, FaUserCheck, FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import Card from '../Card';

const Details = ({dueMembers, totalMembers,expireToday,attendanceToday,expireInNext3Days}) => {
  console.log("details in cards", dueMembers,totalMembers)

  const cardData = [
    { title: 'Due Members', number: dueMembers?.length, icon: <FaUsers className="text-4xl" /> },
    { title: 'Expiry Today', number: expireToday?.length, icon: <FaRegCalendarAlt className="text-4xl" /> },
    { title: 'Attendance Today', number: attendanceToday?.length, icon: <FaUserCheck className="text-4xl" /> },
    { title: 'Expiry in next 1-3 days', number: expireInNext3Days?.length, icon: <FaClock className="text-4xl" /> },
    { title: 'Total Members', number: totalMembers?.length, icon: <FaUsers className="text-4xl" /> },
  ];

  return (
    <div className=" p-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-500">Members Details</h1>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} number={card.number} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default Details;
