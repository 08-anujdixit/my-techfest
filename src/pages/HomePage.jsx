import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import EventCard from '../components/cards/EventCard'
import Button from '../components/Button'
import '../Custom.css'


function Timeline() {
  const timeline = [
    {
      day:"DAY 1",
      events_day : [
        {
          title: "Opening Ceremony",
          location: "Auditorium 1",
          time: "10:00 a.m - 10:30a.m",
        },
        {
          title: "Guest lecture",
          location: "Auditorium 1",
          time: "",
        },
        {
          title: "Renaissance Expo",
          location: "Lab 1 + Corridor",
          time: "10:00 a.m - 02:00 p.m",
        },
        {
          title: "Thumbnail Making",
          location: "Lab 4",
          time: "10:00 a.m - 12:00 p.m",
        },
        {
          title: "Character Desinging",
          location: "Lab 3",
          time: "10:00 a.m - 12:00 p.m",
        },
      ],
    },
    {
      day:"DAY 2",
      events_day : [
        {
          title: "CODE-A-THON",
          location: "Auditorium 1",
          time: "08:00 a.m - 05:00 p.m",
        },
        {
          title: "Tech Treasure Hunt",
          location: "Lab 1",
          time: "10:00 a.m - 12:00 p.m",
        },
        {
          title: "Brain & Code",
          location: "Lab 1",
          time: "12:00 p.m - 02:00 p.m",
        },
        {
          title: "Logo Desinging",
          location: "Lab 3",
          time: "12:30 p.m - 01:30 p.m",
        },
      ],
    },
    {
      day:"DAY 3",
      events_day : [
        {
          title: "CODE-A-THON (Presentation)",
          location: "Auditorium 1",
          time: "10:00 a.m - 12:00 p.m",
        },
        {
          title: "Certificate Distribution",
          location: "Auditorium 1",
          time: "From 12:00 p.m onwards",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-2 px-4">
      {/* Title */}
      <h1 className="text-5xl font-bold text-grad tracking-widest mb-6">
        TIMELINE
      </h1>
      <div
      className='md:flex md:gap-32 px-7 font-mono'
      >
      {
        timeline.map((tl, index) => (
        <div 
        key={index}
        className='text-center w-fit my-4 mx-auto p-6'>
          <h2 className="text-3xl font-extrabold text-white mb-12">{tl.day}</h2>
          {/* Timeline container */}
          <div className="relative border-l-4 border-gray-400 pl-10">
            {tl.events_day.map((event, index) => (
              <div key={index} className="mb-10 relative text-start">
                {/* Circle */}
                <div className="absolute -left-[22px] w-5 h-5 rounded-full bg-grad border-4 border-gray-400"></div>
    
                {/* Event details */}
                <div
                className="inline-block mx-4"
                >
                  <h3 className="text-lg font-bold text-white">{event.title}</h3>
                  <p className="text-sm text-gray-300 italic">
                    {event.location}
                  </p>
                  <p className="text-sm text-gray-400">{event.time? event.time: null}</p>
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
  

const HomePage = () => {
  const navigate=useNavigate();
  return (
    <container
    className='reverseFade'>
      <section className="my-8">
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
      </section>
      <div className='flex justify-center'>
      <Button
      css='m-[2rem] text-2xl shadow-grad'
        onClick={()=>{
          navigate('/register');
        }}
        >Register Now »</Button>
      </div>
      <section className="my-8 hidden">
        <h1 className={`text-grad text-6xl text-center w-full my-4`}>
        About The College
        </h1>
        <div className=" my-2 w-[100%] flex-wrap">
            <p className="text-gray-300 w-auto px-5 text-justify "><span className="text-grad font-extrabold  font-mono">National Post Graduate College</span>, established in 2005, stands as a beacon of academic excellence and innovation. With a serene and inclusive campus, the college is dedicated to nurturing talent and fostering growth in every student. The Computer Science department, a cornerstone of the institution, embraces the latest technological advancements to deliver a robust, industry-oriented education. The college equips students with the skills and confidence to excel in their chosen fields by emphasizing research, internships, and hands-on learning. Complemented by a vibrant array of cultural, sports, and extracurricular opportunities, the college shapes well-rounded individuals prepared to make meaningful contributions to society.
            </p>
        </div>
      </section>
      
      <section className="my-8 py-2">
        <Timeline/>
      </section>
    </container>
  );
};

export default HomePage;