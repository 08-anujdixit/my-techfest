import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import EventCard from '../components/cards/EventCard'
import '../Custom.css'


const HomePage = () => {
  const navigate = useNavigate()
  const events=[
    { name:'Renaissance Expo',
      slug: '/expo',
      description:'A super tech exibition where trailblazing innovation meets revolutionary ideas.'
    },
    { name:'Hackathon',
      slug: '/codeathon',
      description:'The Mini Hackathon is designed to challenge participants and test their technical skills, communication ability, and logical thinking.'
    },

  ]
  
  return (
    <container
    className='reverseFade'>
      <h1 className={`text-grad text-6xl text-center w-full my-4`}>
      Introduction
    </h1>
    <div className=" my-2 w-[100%] flex-wrap">
        <p className="text-gray-300 w-auto px-5 text-justify ">
               At <span className="text-grad font-extrabold font-mono">TechFest 5.0</span>, we raise the bar even higher, uniting brilliant innovators, creative thinkers, and passionate tech enthusiasts under one banner for an extraordinary celebration of technology, innovation, and imagination. This year’s fest is bigger, bolder, and more immersive — blending cutting-edge technology with creativity, talent, and fun. With a wide spectrum of events crafted to spark curiosity and showcase talent, from AI-driven projects to digital artistry, every participant will discover a stage to shine and inspire.
        </p>
        <p className="text-gray-300 w-auto px-5 text-justify mt-3 ">
          The mission of <span className="text-grad font-extrabold  font-mono">TechFest 5.0</span> is to drive forward innovation and foster a culture of collaboration, learning, and exploration among students and young professionals. By offering a platform where technology meets creativity, we empower the next generation of problem-solvers, entrepreneurs, and esports champions. This fest is a movement that highlights the ever-expanding role of technology in shaping our future.
        </p>
    </div>
    <div className="p-8 flex flex-wrap grid md:grid-cols-3 gap-4 md:gap-8 justify-center">
          {
            events.map((event,index) =><EventCard
            key={index}
            event={event}
           onClick={()=>{
             navigate(event.slug)
           }} 
            />)
          }
    </div>
    </container>
  );
};


export default HomePage;