import React, { useEffect, useState } from 'react';

const PersonalTraining = () => {
  const [trainingData, setTrainingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchTrainingData = async () => {
    //   try {
    //     const response = await fetch('API_URL_HERE'); // Replace with your API URL
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     setTrainingData(data);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchTrainingData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
              {trainingData.map((session, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-4 py-2 font-sans">{session.date}</td>
                  <td className="px-4 py-2 font-sans">{session.timeIn}</td>
                  <td className="px-4 py-2 font-sans">{session.timeOut}</td>
                  <td className="px-4 py-2 font-sans">{session.workout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 px-5 py-2 bg-[#f04e3c] text-white rounded-md hover:bg-gray-600 text-lg font-sans">
          More
        </button>
      </div>
    </div>
  );
};

export default PersonalTraining;
