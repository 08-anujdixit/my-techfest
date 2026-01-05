import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import EventCard from '../components/cards/EventCard'
import Button from '../components/Button'
import '../Custom.css'

//COMPLETE TIMELINE FOR EVENT
function Timeline() {
  const timeline = [
    {
      day:"12",
      events_day : [
        {
          title: "Registration",
          location: "Science Block",
          time: "8:00 a.m. - 9:00 a.m.",
        },
        {
          title: "Inaugration Ceremony",
          location: "Auditorium 1",
          time: "9:00 a.m. - 10:00 a.m.",
        },
        {
          title: "Guest lecture",
          location: "Auditorium 1",
          time: "10:00 a.m. - 11:00 a.m.",
        },
        {
          title: "Expo Renaissance",
          location: "Auditorium 1",
          time: "11:00 a.m. - 3:00 p.m.",
        },
        {
          title: "Last Protocol",
          location: "Auditorium 1",
          time: "11:00 p.m. - 1:00 p.m.",
        },
        {
          title: "Brand Blitz",
          location: "Lab 3",
          time: "11:00 a.m. - 12:00 p.m.",
        },
        {
          title: "IT Quize",
          location: "Lab 1",
          time: "11:00 a.m. - 12:00 p.m.",
        },
        {
          title: "IT Quize (Final Round)",
          location: "Auditorium 1",
          time: "1:00 p.m. - 2:00 p.m.",
        },
        {
          title: "Awards & Closing",
          location: "Auditorium 1",
          time: "2:00 p.m. - 3:00 p.m.",
        },
      ],
    },
    {
      day:"13",
      events_day : [
        {
          title: "Registration",
          location: "Science Block",
          time: "8:00 a.m. - 9:00 a.m.",
        },
        {
          title: "CODE-A-THON",
          location: "Auditorium 1",
          time: "9:00 a.m. - 5:00 p.m.",
        },
        {
          title: "Pixel Perfect",
          location: "Lab 4",
          time: "11:30 a.m. - 12:30 p.m.",
        },
        {
          title: "Future Forge",
          location: "Lab 3",
          time: "12:30 a.m. - 2:30 p.m.",
        },
      ],
    },
    {
      day:"14",
      events_day : [
        {
          title: "CODE-A-THON (Presentation)",
          location: "Auditorium 1",
          time: "09:00 a.m. - 11:00 p.m.",
        },
        {
          title: "Prize Distribution",
          location: "Auditorium 1",
          time: "11:00 a.m. - 12 p.m.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-2 px-4">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-grad tracking-wide mb-6">
        Timeline
      </h1>
      <div
      className='md:gap-18 px-7 font-mono md:flex'
      >
      {
        timeline.map((tl, index) => (
        <div 
        key={index}
        className='text-center w-full my-4 mx-auto p-6'>
          <h2 className="text-3xl font-extrabold text-white mb-12">{tl.day}<sup className="text-white">th</sup> February</h2>
          {/* Timeline container */}
          <div className="relative border-l-4 border-gray-400 pl-10 md:ml-16 h-[15rem] overflow-auto">
            {tl.events_day.map((event, index) => (
              <div key={index} className="mb-10 relative text-start">
                {/* Circle */}
                <div className="absolute top-[8px] -left-[22px] w-2 h-2 rounded-full bg-grad border-[1.2px] border-gray-400"></div>
    
                {/* Event details */}
                <div
                className="block mx-0"
                >
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="text-sm font-bold text-gray-300 italic">
                    {event.location}
                  </p>
                  <p className="text-sm font-bold text-gray-400">{event.time? event.time: null}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
        ))
      }
      </div>
    </div>
  );
}

//EVENT INTRODUCTION
const HomePage = () => {
  const navigate=useNavigate();
  return (
    <container
    className='reverseFade'>
      <section className="my-8">
        <h1 className={`text-grad text-5xl md:text-6xl font-bold tracking-wide text-center w-full my-4`}>
        Introduction
        </h1>
        <div className=" my-2 w-[100%] flex-wrap">
            <p className="text-gray-300 w-auto px-5 text-justify">
                   At <span className="text-grad font-extrabold font-mono">TechFest 5.0</span>, we raise the bar even higher, uniting brilliant innovators, creative thinkers, and passionate tech enthusiasts under one banner for an extraordinary celebration of technology, innovation, and imagination. This year’s fest is bigger, bolder, and more immersive — blending cutting-edge technology with creativity, talent, and fun. With a wide spectrum of events crafted to spark curiosity and showcase talent, from AI-driven projects to digital artistry, every participant will discover a stage to shine and inspire.
            </p>
            <p className="text-gray-300 w-auto px-5 text-justify mt-3 ">
              The mission of <span className="text-grad font-extrabold  font-mono">TechFest 5.0</span> is to drive forward innovation and foster a culture of collaboration, learning, and exploration among students and young professionals. By offering a platform where technology meets creativity, we empower the next generation of problem-solvers, entrepreneurs, and coders. This fest is a movement that highlights the ever-expanding role of technology in shaping our future.
            </p>
        </div>
      </section>
      <div className='flex justify-center'>
      <Button
      css='m-[2rem] text-2xl'
        onClick={()=>{
          navigate('/register');
        }}
        >Register Now »</Button>
      </div>
      <section className="my-8 py-2">
        <Timeline/>
      </section>
    </container>
  );
};

export default HomePage;