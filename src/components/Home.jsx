import React,{ useState, useEffect } from 'react'
import Logo from './Logo'
import Activate from './Activate'
import '../Custom.css'
import {Howl, Howler} from 'howler';
import optimus from "../assets/sounds/transformer_venom.mp3"


const Home = () => {
  const [visible,setVisible] = useState(true);
  
  //calling for visibility effect
  useEffect(()=>{
    setTimeout(()=>{
      setVisible(!visible)
    },800);
  },[])
  
  //calling for sound effect
  // useEffect(() => {
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
    <Activate
    custom_styling={`${visible? '' : 'hidden'}`}
    />
    <main
    className={`${visible? 'hidden' : ''}`}
    >
        <div 
        className="h-[100vh] md:h-[80vh] w-[100vw] md:flex md:justify-center md:items-center 
        ">
          <h1 
          className='text-7xl text-grad text-center font-serif md:text-8xl mt-10
          '
          >Tech Fest 5.0</h1>
          <div 
          className='mt-5 w-[100%] md:w-[40%] flex justify-center'
          >
            <Logo
            animate='rounded-full animate-[spin_7s_linear_infinite]'
            />
          </div>
        </div>
    </main> 
  </>
  )
};

export default Home;