// src/LandingPage.js
import React,{useRef,useState} from 'react';
import backgroundImage from '../assets_backup/landing_page2.jpg'
import Navbar from './Navbar';

function LandingPage() {
  const enquiryFormRef = useRef(null);

  const scrollToEnquiryForm = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Navbar/>
      {/*<div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-8">This is a brief description of what we do.</p>
  </div>*/}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
  
  </div>
 

{/* Enquiry Form Section */}
<section ref={enquiryFormRef} id="enquiry" className="h-screen bg-gray-400 flex flex-col items-center justify-center p-4">
  <h2 className="text-3xl font-bold mb-4">Enquiry Form</h2>
  <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send
      </button>
    </div>
  </form>
</section>
</div>


  );
}

export default LandingPage;
