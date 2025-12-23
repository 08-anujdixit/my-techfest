import React from 'react';
import RegistrationForm from '../components/forms/RegistrationForm.jsx'
import ParticlesBackground from '../components/background/ParticleBG.jsx'
import '../Custom.css'

const RegistrationPage = () => {
  const notices=[
    'notice1 is about event and registration.',
    'notice2 is about update in timing schedule.',
    ]
  return (
    <container className='reverseFade'>
      <div className='my-6 text-center'>
          <h1 className='text-grad text-5xl md:text-6xl font-bold tracking-wide'>
            Registration Form
          </h1>
        </div>
      { /* NOTICES*/ }
      {
            notices.length && true?
            <div className='my-5 mx-auto p-5 bg-transparent-blur border-[1px] border-gray-900 w-[90%]
          '>
          <h3 className="text-xl text-gray-300 font-bold underline p-2 mb-2 bg-transparent-blur">Notice</h3>
          {notices.map((n, i) =>(
            <p
            key={i}
            className="text-gray-400 pt-2 text-sm text-justify">#{i+1}. {n}</p>
          ))}
          </div>:null
      }
      <RegistrationForm/>
      <ParticlesBackground/>
    </container>
  );
};


export default RegistrationPage;