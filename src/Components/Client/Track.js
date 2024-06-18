import React, { useEffect,useState } from "react";
import { FaCalendarDay, FaFire } from "react-icons/fa";
import { getCredentials } from "../../Credentials/creds";
import axios from "axios";
import { baseUrl } from "../../configs/urlConfigs";

const Track = () => {

  const [maxStreak, setmaxStreak] = useState();
  const [presentDays, setpresentDays] = useState();

  const getTrackData = async () => {

    try {
      const token = await getCredentials();
  
     
        const response = await axios.get(`${baseUrl}/attendance`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*' ,
            
            // This header is typically set on the server side, not in client requests
          }
        });
        
        if(response?.data?.success){
          setpresentDays(response.data.presentDays.length);
          setmaxStreak(response.data.maxStreak);
        }

        console.log("Response:", response.data);


     
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  useEffect(() => {
    getTrackData();
  }, []);

  return (
    <div id="track" className="container mx-auto p-5 mt-40">
      {/* Tracking Cards */}
      <div className="flex flex-col md:flex-row justify-around mb-10 gap-5">
        <div className="flex items-center bg-white shadow-lg rounded-lg p-5 w-full md:w-1/3">
          <FaCalendarDay className="text-5xl text-orange-500 mr-4" />
          <div>
            <h2 className="text-xl font-bold font-sans">Present Days</h2>
            <p className="text-gray-600 text-lg font-sans">
              {presentDays}
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white shadow-lg rounded-lg p-5 w-full md:w-1/3">
          <FaFire className="text-5xl text-orange-500 mr-4" />
          <div>
            <h2 className="text-xl font-bold font-sans">Max Streak</h2>
            <p className="text-gray-600 text-lg font-sans">
              {maxStreak}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
