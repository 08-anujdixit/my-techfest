import React from 'react';
import '../index.css'
import '../Custom.css'
import {Link} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";



const Footer = () => {
  
  const quickLinks =[
    {
      name:"Code of Conduct",
      slug:"/about/#coc",
      active:true,
    },
    {
      name:"Have Any Queries",
      slug:"/about/#query",
      active:true,
    },
    {
      name:"Contact Us",
      slug:"/about/#contactus",
      active:true,
    },
    { 
      name:"Leader Board",
      slug:"/leaderboard",
      active:true,
    },
    {
      name:"Our Team",
      slug:"/about/#coreteam",
      active:true,
    },
    {
      name:"Events",
      slug:"/events",
      active:true,
    },
    {
      name:"Sponsors",
      slug:"/about/#sponsors",
      active:true,
    },
    {
      name:"Register Now",
      slug:"/register",
      active:true,
    },
  ]
  
  const socialMediaAcc = [
  {
    title: 'Instagram',
    active:true,
    icon: <FaInstagram />,
    slug:"/",
  },
  {
    title: 'Facebook',
    active:true,
    icon: <FaFacebook />,
    slug:"/",
  },
  {
    title: 'XTwiteter',
    active:true,
    icon: <FaXTwitter />,
    slug:"/",
  },
  {
    title: 'LinkedIn',
    active:true,
    icon: <FaYoutube />,
    slug:"/",
  },
]
  
  return (
    <>
      <footer className='h-auto py-4 bg-gray-900 w-full relative z-[1000]'>
        <div className='flex items-center'>
          <Link
          to='/'
          >
            <Logo
              h="h-[4rem] md:h-[5rem]"
              w="w-[4rem] md:w-[5rem]"
            />
          </Link>
          <p className='w-[90%] font-extrabold text-grad pb-1 md:text-xl'>Quick Links</p>
        </div>
        <div className='w-auto h-auto '>
          <ul 
          className='m-5 columns-2 w-full 
          ' >
            {
              quickLinks?.map((l) =>(
                l.active ? (<li
                key={l.name}
                className='text-[0.9rem] m-2
                  md:text-[1.5rem] 
                  '
                >
                  <Link 
                    to={l.slug}
                    className="text-gray-400"
                  >{l.name}</Link>
                </li>) : null
              ))
            }
          </ul>
        </div>
        
        <div className=' my-3 p-2 flex text-3xl justify-around md:justify-evenly'>
          {
            socialMediaAcc?.map((sma,i) =>(
              sma.active ? (
                <Link 
                className={`text-gray-200 rounded-[50%] bg-grad p-[0.9px]`}
                to={sma.slug}
                >
                  <div className="bg-[#000011] rounded-[50%] p-3">
                    {sma.icon}
                  </div>
                </Link>
              ):null
            ))
          }
        </div>
          
        <div className='flex justify-center h-[20%] items-center'>
          <p
          className='text-grad md:text-2xl'
          >&copy; 2025 Tech Fest. All Rights Reserved.</p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;