import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login';
import ClientDashboard from './Pages/ClientDashboard';
import StaffDashboard from './Pages/StaffDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import { getCredentials } from './Credentials/creds';
import Members from './Components/Members';
import MemberProfile from './Components/MemberProfile';
import AddMember from './Components/AddMember';
import UserAttendance from './Components/Client/UserAttendance';


const App = () => {


  return (
    <div className='App '>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path='login' element={<Login/>}/>
      <Route path='/clientdashboard' element={<ClientDashboard/>}/>
      <Route path='/staffdashboard' element={<StaffDashboard/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/members' element={<Members/>}/>
      <Route path='/members/:id' element={<MemberProfile/>}/>
      <Route path='/members/add' element={<AddMember/>}/>
      <Route path="/clientdashboard/attendace" element={<UserAttendance/>}/>
      




      
      </Routes>
      </Router>
        
    </div>
  )
}

export default App