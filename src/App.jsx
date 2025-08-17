import React,{ useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const navigate = useNavigate()
  // useEffect(()=>{
  //   navigate('/home')
  // },[]);
  
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
}

export default App

