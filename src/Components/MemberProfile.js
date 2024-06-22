import React, { useEffect,useState } from "react";
import StaffNav from "../Components/Staff/StaffNav";
import { staffNavLinks } from "../Data/Data";
import profileImage from "../assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { getCredentials } from "../Credentials/creds";
import { baseUrl } from "../configs/urlConfigs";
import axios from "axios";

const ProfilePage = () => {
  const [userData, setuserData] = useState({})
  let { id } = useParams();
  console.log("id", id);

  const getUserProfileData = async () => {
    try {
      const token = await getCredentials();

      const response = await axios.get(
        `${baseUrl}/user`,
       
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            'userId': id,

          },
        }
      );

      if (response?.status == 200) {
        console.log("Response:", response.data);
        setuserData(response?.data)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  useEffect(()=>{
    getUserProfileData()
  },[])

  return (
    <>
      <StaffNav nav="true" navLinks={staffNavLinks} />
      <div className="flex flex-col lg:flex-row h-screen font mt-32 overflow-y-auto">
        {/* Left Section */}
        <div className="w-full lg:w-1/4 flex flex-col items-center p-4 mt-10">
          <div className="text-center items-center relative">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover mb-4 mx-9 lg:mx-16"
            />
            <h2 className="text-3xl lg:text-4xl font-semibold font relative inline-flex items-center">
             {userData?.firstName+" "+userData?.lastName}
              <FontAwesomeIcon
                icon={faEdit}
                className="ml-2  text-gray-500 cursor-pointer hover:text-gray-700"
              />
            </h2>
            <p className="font text-xl lg:text-2xl text-gray-600 font">
              {userData?.email}
            </p>
            <button className="mt-4 px-4 py-2 bg-[orangered] text-white rounded hover:bg-gray-300 hover:text-black font text-base lg:text-lg">
              Mark Attendance
            </button>
          </div>
          <div className="mt-6 w-full px-4 items-center text-center">
            <h3 className="font text-2xl lg:text-3xl font-semibold mb-2">
              Personal Info
            </h3>
            <p className="font text-lg lg:text-xl">Phone: {userData?.mobile_no}</p>
            <p className="font text-lg lg:text-xl">
              Address: 123 Main St, Anytown, USA
            </p>
            <p className="font text-lg lg:text-xl">Membership: Active</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300 hidden lg:block"></div>
        <div className="border-t border-gray-300 w-full lg:w-px my-4 lg:my-0"></div>

        {/* Right Section */}
        <div className="w-full lg:w-3/4 p-4">
          {/* Physic Section */}
          <div className="mb-8">
            <h3 className="font text-2xl lg:text-3xl font-semibold mb-2 bg-gray-200">
              Physic
            </h3>
            <p className="font text-lg lg:text-xl">Height: {userData?.height}</p>
            <p className="font text-lg lg:text-xl">Weight: {userData?.weight} kgs</p>
            <p className="font text-lg lg:text-xl">Previous Injuries: None</p>
          </div>

          <div className="border-t border-gray-300 w-full my-4 lg:my-0"></div>

          {/* Fitness Goals Section */}
          <div className="mb-8">
            <h3 className="font text-2xl lg:text-3xl font-semibold mb-2 mt-4 bg-gray-200 ">
              Fitness Goals
            </h3>
            <p className="font text-lg lg:text-xl">
              Fitness Goal: Build Muscle
            </p>
            <p className="font text-lg lg:text-xl">Diet: Non-Vegetarian</p>
            <p className="font text-lg lg:text-xl">Ideal Weight: 170 lbs</p>
            <p className="font text-lg lg:text-xl">
              Preferred Exercises: Weightlifting, Cardio
            </p>
          </div>
          <div className="border-t border-gray-300 w-full my-4 lg:my-0"></div>

          {/* Preferences Section */}
          <div className="mb-8">
            <h3 className="font text-2xl lg:text-3xl font-semibold mb-2 mt-4 bg-gray-200">
              Preferences
            </h3>
            <p className="font text-lg lg:text-xl">
              Preferred Timings: {userData?.shift}
            </p>
            <p className="font text-lg lg:text-xl">Parking Need: Yes</p>
          </div>
          <div className="border-t border-gray-300 w-full my-4 lg:my-0"></div>

          {/* Personal Training Section */}
          <div>
            <h3 className="font text-2xl lg:text-3xl font-semibold mb-2 mt-4 bg-gray-200 ">
              Personal Training
            </h3>
            <p className="font text-lg lg:text-xl">PT: Yes</p>
            <p className="font text-lg lg:text-xl">
              Personal Trainer's Name: Jane Smith
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
