import React,{useEffect}from 'react';
import '../Custom.css'
import Logo from './Logo'

const Activate = ({custom_styling}) => {
  
  useEffect(()=>{},[])
  
  return (
   <div 
   className={`h-[98vh] w-[100vw]  ${custom_styling} flex justify-center items-center`}>
    <Logo
    animate={
      `rounded-full popUp`
    }
    />
   </div>
  );
};

export default Activate;