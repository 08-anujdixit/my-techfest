import React from 'react';
import Signup from '../components/Signup.jsx'
import ParticlesBackground from '../components/background/ParticleBG.jsx'
import '../Custom.css'

const SignupPage = () => {
  return (
    <div className='py-8'>
      <Signup/>
      <ParticlesBackground/>
    </div>
  )
}

export default SignupPage;