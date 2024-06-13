import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login';
import ClientDashboard from './Pages/ClientDashboard';
import StaffDashboard from './Pages/StaffDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import { getCredentials } from './Credentials/creds';
import Members from './Components/Members';


const App = () => {


  return (
    <div className='App bg-gray-50'>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path='login' element={<Login/>}/>
      <Route path='/clientdashboard' element={<ClientDashboard/>}/>
      <Route path='/staffdashboard' element={<StaffDashboard/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/members' element={<Members/>}/>


      
      </Routes>
      </Router>
        
    </div>
  )
}

export default App