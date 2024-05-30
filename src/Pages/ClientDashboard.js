import React,{useState} from 'react'
import { clientNavLinks} from '../Data/Data';
import Nav from '../Components/Nav';
import HeroSection from '../Components/HeroSection';
import Feedback from '../Components/Feedback';
import Footer from '../Components/Footer';
import Track from '../Components/Track';
import Files from '../Components/Files';
import PersonalTraining from '../Components/PersonalTraining';

const ClientDashboard=()=> {
    const [nav,setNav] = useState(false)

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
      <Nav type="user" nav="true" navLinks={clientNavLinks}/>
      <Track/>
      <PersonalTraining/>
      <Files/>
      <hr className="border-gray-200 mb-10" />

      <Feedback/>
      <Footer/>
    </div>
  )
}

export default ClientDashboard
