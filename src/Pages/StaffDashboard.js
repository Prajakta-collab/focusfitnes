import React,{useEffect, useState} from 'react'
import StaffNav from '../Components/Staff/StaffNav'
import {  staffNavLinks } from '../Data/Data';
import TimeTracker from '../Components/Staff/TimeTracker';
import StaffDashboardDetails from '../Components/Staff/StaffDashboardDetails'
import Footer from '../Components/Footer';
import Concern from '../Components/Staff/Concern';
import { baseUrl } from '../configs/urlConfigs';
import axios from 'axios';

const StaffDashboard = () => {
  const [nav,setNav] = useState(false);
  const [details,setDetails]=useState({});

  window.addEventListener("scroll",()=>{
    const scroll = document.documentElement.scrollTop
    if(scroll > 405){
      setNav(true)
    }
    else{
      setNav(false)
    }
   })

   //req to get members cards details on staffdashboard

   const getStaffDashboardDetails = async () => {

    try {
     
        const response = await axios.get(`${baseUrl}/details`, {
          headers: {
            //'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*' ,
            
            // This header is typically set on the server side, not in client requests
          }
        });
        
        if(response?.status==200){
         console.log("res in staff dash",response?.data)
         setDetails(response?.data)
        }

        //console.log("Response:", response.data);


      
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(()=>{
getStaffDashboardDetails()
  },[])

  return (
    <div className=''>
    <StaffNav nav="true" navLinks={staffNavLinks}/>
    <TimeTracker/>
    <StaffDashboardDetails dueMembers={details?.dueMembers} totalMembers={details?.totalMembers} expireToday={details?.expireToday} expireInNext3Days={details?.expireInNext3Days}  attendanceToday={details?.attendanceToday}/>
    <Concern/>
    <Footer/>
    </div>
  )
}

export default StaffDashboard
