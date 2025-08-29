import React from 'react';
import Login from '../components/Login.jsx'
import ParticlesBackground from '../components/background/ParticleBG.jsx'
import '../Custom.css'

const LoginPage = () => {
  return (
    <div className='py-8'>
      <Login/>
      <ParticlesBackground/>
    </div>
  )
}

export default LoginPage;