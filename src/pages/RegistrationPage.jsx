import React from 'react';
import '../Custom.css'
import RegistrationForm from '../components/forms/RegistrationForm.jsx'
import ParticlesBackground from '../components/background/ParticleBG.jsx'
import { FiLock } from "react-icons/fi";

const RegistrationPage = () => {
  
  const notices=[
    'Registration verification may take 1–2 business days.',
    'Ensure valid email and phone details for communication.',
    'Registrations for some events have been closed.'
    ]
  
   /* return (
    <div className="min-h-[60vh] flex justify-center items-center px-4">
      <div className="bg-grad p-[1px] rounded-2xl w-full max-w-xl">
        <div className="bg-[#000011] rounded-2xl p-8 text-center">
          
          <div className="flex justify-center mb-4 text-[#FF1F6A] text-5xl">
            <FiLock />
          </div>

          <h1 className="text-3xl font-bold text-white mb-3">
            Registrations Closed
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            Thank you for your interest in <span className="text-grad font-semibold">TechFest 5.0</span>.
            <br />
            Registrations are now closed.
          </p>

          <p className="text-sm text-gray-400">
            Please keep checking our official WhatsApp group for updates.
          </p>

          <div className="mt-6 text-[#FF1F6A] font-semibold animate-pulse">
            Stay Tuned 🚀
          </div>
        </div>
      </div>
    </div>
  );  */
  
  return (
    <container
      className=''>
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
              className="text-gray-300 pt-2 text-sm text-left font-bold">✧ {n}</p>
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