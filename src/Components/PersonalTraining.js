import React from 'react'

const PersonalTraining = () => {
  return (
    <div className="container mx-auto p-5">
    <h2 className="text-2xl font-bold mb-3 font-sans">Your Daily PT Track</h2>
     <div className="bg-white shadow-lg rounded-lg p-5">
     <div className="overflow-x-auto">
       <table className="min-w-full table-auto text-lg">
         <thead className="bg-gray-200">
           <tr>
             <th className="px-4 py-2 font-sans">Date</th>
             <th className="px-4 py-2 font-sans">Time In</th>
             <th className="px-4 py-2 font-sans">Time Out</th>
             <th className="px-4 py-2 font-sans">Workout</th>
           </tr>
         </thead>
         <tbody>
           {/* Example row 1 */}
           <tr className="bg-white border-b">
             <td className="px-4 py-2 font-sans ">2024-05-30</td>
             <td className="px-4 py-2 font-sans">08:00 AM</td>
             <td className="px-4 py-2 font-sans">09:00 AM</td>
             <td className="px-4 py-2 font-sans">Yoga</td>
           </tr>
           {/* Example row 1 */}
           <tr className="bg-white border-b">
             <td className="px-4 py-2 font-sans ">2024-05-31</td>
             <td className="px-4 py-2 font-sans">08:00 AM</td>
             <td className="px-4 py-2 font-sans">09:00 AM</td>
             <td className="px-4 py-2 font-sans">Legs</td>
           </tr>{/* Example row 1 */}
           <tr className="bg-white border-b">
             <td className="px-4 py-2 font-sans ">2024-06-01</td>
             <td className="px-4 py-2 font-sans">08:00 AM</td>
             <td className="px-4 py-2 font-sans">09:00 AM</td>
             <td className="px-4 py-2 font-sans">Sholders, Chest, Biceps</td>
           </tr>
          
         </tbody>
       </table>
     </div>
     <button className="mt-4 px-5 py-2 bg-[#f04e3c] text-white rounded-md hover:bg-gray-600 text-lg  font-sans">
       More
     </button>
   </div>
   </div>
  )
}

export default PersonalTraining
