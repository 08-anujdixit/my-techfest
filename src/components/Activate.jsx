import React,{ useState, useEffect } from 'react'
import Logo from './Logo'
import '../Custom.css'
import {Howl, Howler} from 'howler';
import {Link, useNavigate} from 'react-router-dom';
import optimus from "../assets/sounds/transformer_venom.mp3"

import Particle from '../assets/videos/Particle.mp4'

const Activate = () => {
  const navigate = useNavigate();
  const [visible,setVisible] = useState(true);
  //calling for visibility effect
  useEffect(()=>{
    setTimeout(()=>{
      setVisible(!visible)
    },800);
  },[]);
  
  //calling for sound effect
  // useEffect(()=>{
  //   const greeting = new Howl({
  //     src: optimus,
  //     volume: 0.5,
  //   });
  //   function playSegment(startTime, duration) {
  //     greeting.seek(startTime);
  //     greeting.play();

  //     setTimeout(() => {
  //       greeting.stop(); 
  //     }, duration * 1000);
  //   }
    
  //   playSegment(0.4, 0.8);
  //   return ()=>{
  //     greeting.stop();
  //     greeting.unload();
  //   };
  // },[]);
  
  return (
    <>
     <div 
     className={`h-[98vh] w-full  ${visible? '' : 'hidden'} flex justify-center items-center`}>
      <Logo
      animate={
        `rounded-full popUp`
      }
      />
     </div>
     <main
    className={`${visible? 'hidden' : ''} w-full`}
    >
        <div 
        className="h-[100vh] md:h-[80vh] w-full md:flex md:justify-center md:items-center py-10
        ">
          <h1 
          className='text-7xl text-grad text-center font-serif md:text-8 reverseFade 
          '
          >Tech Fest 5.0</h1>
          <div 
          className='mt-5 w-[100%] md:w-[40%] flex justify-center '
          >
          <button
          onClick={()=>{
            setTimeout(()=>{
              navigate('/home');
            }, 200);
          }} 
          >
            <Logo
            animate='rounded-full animate-[spin_7s_linear_infinite] '
            />
          </button>
          </div>
        </div>
    </main> 
   </>
  );
};

export default Activate;