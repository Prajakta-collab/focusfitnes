import React, { useState } from 'react';

const Feedback = () => {
  const [serviceRating, setServiceRating] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section id="feedback" className="w-full py-12 mt-10">
      <div className="max-w-[1500px] mx-auto items-center gap-10 px-5 md:px-10 py-0">
        <div className="text-center">
          <p className="text-[#f04e3c] text-xl font-bold mb-4 relative inline-block before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2">
            FEEDBACK FORM
          </p>
          <div className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight mt-5 mb-20 ">
            <h1>YOUR FEEDBACK IS VALUABLE</h1>
            <h1>FOR US!</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-6 max-sm:w-[90%] max-sm:mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="input w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Phone"
            className="input w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
          type="email"
          placeholder="Email"
          className="input w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />

          <div className="col-span-2 md:col-span-1">
            <label className=" text-gray-500 text-xl mb-2 font-sans">How good was the service?</label>
            <div className="flex flex-wrap gap-4">
              <label className="items-center text-gray-500 ">
                <input
                  type="radio"
                 name="serviceRating"
                  value="Excellent"
                  checked={serviceRating === 'Excellent'}
                  onChange={(e) => setServiceRating(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2 text-xl font-sans">Excellent</span>
              </label>
              <label className="inline-flex items-center text-gray-500 ">
                <input
                  type="radio"
                  name="serviceRating"
                  value="Good"
                  checked={serviceRating === 'Good'}
                  onChange={(e) => setServiceRating(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2 text-xl font-sans ">Good</span>
              </label>
              <label className="inline-flex items-center text-gray-500 ">
                <input
                  type="radio"
                  name="serviceRating"
                  value="Fair"
                  checked={serviceRating === 'Fair'}
                  onChange={(e) => setServiceRating(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2 text-xl font-sans">Fair</span>
              </label>
              <label className="inline-flex items-center text-gray-500 ">
                <input
                  type="radio"
                  name="serviceRating"
                  value="Poor"
                  checked={serviceRating === 'Poor'}
                  onChange={(e) => setServiceRating(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2 text-xl font-sans ">Poor</span>
              </label>
            </div>
          </div>

         
          <textarea
            placeholder="Message"
            className="input w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none h-36 col-span-2 md:col-span-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center mt-10">
          <button className="py-4 px-9 text-xl font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition">
            SEND FEEDBACK
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
