import React,{ useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const location = useLocation();
  

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
  );
}

export default App

