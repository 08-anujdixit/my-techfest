import React from 'react';
import RegistrationForm from '../components/forms/RegistrationForm.jsx'
import '../Custom.css'

const RegistrationPage = () => {
  return (
    <container className='reverseFade'>
      <div className='my-6 text-center'>
          <h1 className='text-grad text-4xl font-extrabold'>
            Registration Form
          </h1>
        </div>
      <RegistrationForm/>
    </container>
  );
};


export default RegistrationPage;