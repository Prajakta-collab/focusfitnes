import React, { useEffect, useState } from 'react';

const PersonalTraining = () => {
  const [trainingData, setTrainingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dummy data to simulate fetching from an API
    const dummyData = [
      { date: '2023-06-18', timeIn: '07:00 AM', timeOut: '08:00 AM', workout: 'Cardio' },
      { date: '2023-06-19', timeIn: '07:30 AM', timeOut: '08:30 AM', workout: 'Strength Training' },
      { date: '2023-06-20', timeIn: '06:45 AM', timeOut: '07:45 AM', workout: 'Yoga' },
    ];

    setTrainingData(dummyData);
    setLoading(false);
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
