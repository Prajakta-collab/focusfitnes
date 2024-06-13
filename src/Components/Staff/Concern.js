import React, { useState } from 'react';

const Concern = () => {
  const [serviceRating, setServiceRating] = useState('');
  const [message, setMessage] = useState('');
  const [concernType, setConcernType] = useState('');

  return (
    <section id="concern" className="w-full py-12 mt-10">
      <div className="max-w-[1500px] mx-auto items-center gap-10 px-5 md:px-10 py-0">
        <div className="text-center">
          <p className="text-[#f04e3c] text-xl font-bold mb-4 relative inline-block before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2">
            CONCERN FORM
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-6 max-sm:w-[90%] max-sm:mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="input w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          />

          <select
            value={concernType}
            onChange={(e) => setConcernType(e.target.value)}
            className="input w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Concern Type</option>
            <option value="Shift">Shift</option>
            <option value="Expense">Expense</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            placeholder="Message"
            className="input w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none h-36 col-span-2 md:col-span-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center mt-10">
          <button className="py-4 px-9 text-xl font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition">
            SEND TO ADMIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Concern;
