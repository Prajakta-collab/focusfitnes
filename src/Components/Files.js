import React from 'react';
import { FaFileAlt, FaDownload } from 'react-icons/fa';

const Files = () => {
  return (
    <div className="flex justify-center ">
      <section id="files" className="bg-white rounded-lg p-5 mb-10 max-w-3xl">
        <h2 className="text-2xl font-bold mb-3 font-sans">All Files</h2>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center w-3/4">
              <FaFileAlt className="text-3xl text-gray-600 mr-4" />
              <span className="text-lg  font-sans">DietPlan.pdf</span>
            </div>
            <button className="flex items-center px-5 py-2 bg-[#f04e3c] text-white rounded-md hover:bg-gray-400 text-xl ml-7 font-sans" >
              <FaDownload className="mr-2" /> Download
            </button>
          </div>
         
        </div>
      </section>

    </div>
  );
};

export default Files;
