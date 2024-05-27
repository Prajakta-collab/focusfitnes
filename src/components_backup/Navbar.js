// src/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Focus Fitness</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
          <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
