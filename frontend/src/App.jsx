import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import './App.css'
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    </>
  )
}

export default App
