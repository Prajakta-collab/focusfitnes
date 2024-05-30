import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login';
import ClientDashboard from './Pages/ClientDashboard';


const App = () => {

  return (
    <div className='App'>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path='login' element={<Login/>}/>
      <Route path='/clientdashboard' element={<ClientDashboard/>}/>
      </Routes>
      </Router>
        
    </div>
  )
}

export default App