import React ,{useEffect, useState} from 'react';
import Nav from '../Components/Nav'
import About from '../Components/About'
import Services from '../Components/Services'
import Client from '../Components/Client'
import Gallery from '../Components/Gallery'
import TeamMembers from '../Components/TeamMembers'
import Offer from '../Components/Offer'
import TimeSchedule from '../Components/TimeSchedule'
import Contact from '../Components/Contact'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import LandingPage from '../components_backup/LandingPage'
import { navLinks } from '../Data/Data';
import { useSelector, useDispatch } from 'react-redux';
import { getCredentials } from '../Credentials/creds';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import { baseUrl } from '../configs/urlConfigs';



function Home() {  const navigate = useNavigate();

  const getUserRole=async()=>{

    const token = await getCredentials();

    try {
      let decoded = jwtDecode(token);

  
      if (token) {
        const response = await axios.get(`${baseUrl}/user/by-email`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*' ,
            'email':decoded?.sub
            
            // This header is typically set on the server side, not in client requests
          }
        });
        
        if(response?.status===200){
          console.log(response?.data);
          if(response?.data?.roles[0]?.roleName=='ROLE_USER'){
            navigate('/clientdashboard');
          }
          else if(response?.data?.roles[0]?.roleName=='ROLE_STAFF'){
            navigate('/staffdashboard')
          }else{
            navigate('/admindashboard')
          }
        }

        console.log("Response:", response.data);


      } else {
        console.log("Error: ");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    
  }
  useEffect(() => {
    
    getUserRole();

    
    // if (token) {
    //   navigate('/clientdashboard');
    // }
  }, [navigate]);

  const dispatch=useDispatch();

  const [nav,setNav] = useState(false);



  window.addEventListener("scroll",()=>{
    const scroll = document.documentElement.scrollTop
    if(scroll > 405){
      setNav(true)
    }
    else{
      setNav(false)
    }
   })

  return (
    <div>
    <Nav nav={nav} navLinks={navLinks}/>
    <HeroSection />
    <About />
    <Services />
    <Client />
    {/*<Gallery />*/}
    <TeamMembers />
    <Offer />
   { /*<TimeSchedule />*/}
    <Contact />
{       /*  <Blog />*/}
  <Footer nav={nav}/>
    </div>
  )
}

export default Home
