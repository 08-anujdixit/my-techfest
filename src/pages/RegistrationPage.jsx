import React from 'react';
import RegistrationForm from '../components/forms/RegistrationForm.jsx'
import ParticlesBackground from '../components/background/ParticleBG.jsx'
import '../Custom.css'

const RegistrationPage = () => {
  const notices=[
    'Refer to the official brochure for detailed rules and guidelines.',
    'Registration verification may take 1–2 business days.',
    'Ensure valid email and phone details for communication.',
    ]
  return (
    <container
    className='reverseFade'>
      <div className='my-0 h-auto text-center'>
          <h1 className='text-grad text-5xl md:text-6xl font-bold tracking-wide py-4'>
            Registration Form
          </h1>
        </div>
      { /* NOTICES*/ }
      {
            notices.length && true?
            <div className='my-6 mx-auto p-5 bg-transparent-blur border-[1px] border-gray-900 w-[90%]
          '>
          <h3 className="text-xl text-gray-200 font-bold underline p-2 mb-2 bg-transparent-blur">Notices</h3>
          {notices.map((n, i) =>(
            <p
            key={i}
            className="text-gray-300 pt-2 text-sm text-justify font-bold">#{i+1}. {n}</p>
          ))}
          </div>:null
      }
      <RegistrationForm/>
      <div id="particlesBg">
        <ParticlesBackground/>
      </div>
    </container>
  );
};


export default RegistrationPage;