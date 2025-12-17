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
      name:"Register Now",
      slug:"/register",
      active:true,
    },
    {
      name:"Code of Conduct",
      slug:"/about/#coc",
      active:true,
    },
    
    {
      name:"Contact Us",
      slug:"/about/#contactus",
      active:true,
    },
    {
      name:"Privacy and Policy",
      slug:"/about/#privacy-policy",
      active:true,
    },
    {
      name:"Refund Policy",
      slug:"/about/#refund-policy",
      active:true,
    },
    {
      name:"Have Any Queries",
      slug:"/about/#query",
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
      name:"Brochure",
      slug:"/",
      active:true,
    },
  ]
  
  const socialMediaAcc = [
  {
    title: 'Facebook',
    active:true,
    icon: <FaFacebook />,
    slug:"https://www.facebook.com/share/1Av6JwqyF3/",
  },
  {
    title: 'Instagram',
    active:true,
    icon: <FaInstagram />,
    slug:"https://www.instagram.com/techfest5.0?igsh=cm9hZ2VnaDJlZmU4",
  },
  {
    title: 'LinkedIn',
    active:true,
    icon: <FaLinkedin />,
    slug:"https://www.linkedin.com/events/techfestnpgc7405912813782810624/",
  },
  {
    title: 'YouTube',
    active:true,
    icon: <FaYoutube />,
    slug:"https://youtube.com/@npgccomputerscience?si=JvZrymg4dLUGdQkv",
  },
]
  
  return (
    <>
      <footer className='h-auto py-4 bg-gray-900 w-full relative z-[1000] bottom-0'>
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
        <div className='md:flex md:justify-center md:items-center w-auto h-auto px-2'>
          <ul 
          className='my-5 grid grid-cols-3 gap-y-0 w-full' >
            {
              quickLinks?.map((l) =>(
                l.active ? (<li
                key={l.name}
                className='text-[0.8rem] my-1
                  md:text-[1.5rem] text-center
                  '
                >
                  <a 
                    href={l.name=='Brochure'?'/public/brochure/brochure.pdf':l.slug}
                  download={l.name=='Brochure'?true:false}
                    className="text-gray-400 hover-grad"
                  >{l.name}</a>
                </li>) : null
              ))
            }
          </ul>
        </div>
        
        <div className=' my-3 p-2 flex text-xl md:text-3xl justify-around md:justify-evenly'>
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