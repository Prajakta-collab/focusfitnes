import React, { useEffect, useState } from 'react'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login';
import ClientDashboard from './Pages/ClientDashboard';
import StaffDashboard from './Pages/StaffDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import { getCredentials } from './Credentials/creds';


const App = () => {


  return (
    <div className='App'>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path='login' element={<Login/>}/>
      <Route path='/clientdashboard' element={<ClientDashboard/>}/>
      <Route path='/staffdashboard' element={<StaffDashboard/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>

      
      </Routes>
      </Router>
        
    </div>
  )
}

export default App