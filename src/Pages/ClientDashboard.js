import React,{useState} from 'react'
import { clientNavLinks} from '../Data/Data';
import Feedback from '../Components/Client/Feedback';
import Footer from '../Components/Footer';
import Track from '../Components/Client/Track';
import Files from '../Components/Files';
import PersonalTraining from '../Components/Client/PersonalTraining';
import ClientNav from '../Components/Client/ClientNav';

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
      <ClientNav nav="true" navLinks={clientNavLinks}/>
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
