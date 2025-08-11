import React from 'react';
import '../index.css'
import '../Custom.css'
import {useNavigate} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  
  //const navigate = useNavigate()
  const links =[
    {
      name:"Code of Conduct",
      slug:"/code-of-conduct",
      active:true,
    },
    {
      name:"Have Any Queries",
      slug:"/queries",
      active:true,
    },
    {
      name:"Contact Us",
      slug:"/contact-us",
      active:true,
    },
    { 
      name:"Leader Board",
      slug:"/leader-board",
      active:true,
    },
    ]
  
  const socialMediaAcc = [
  {
    title: 'Instagram',
    active:true,
    icon: <FaInstagram />,
  },
  {
    title: 'Facebook',
    active:true,
    icon: <FaFacebook />,
  },
  {
    title: 'XTwiteter',
    active:true,
    icon: <FaXTwitter />,
  },
  {
    title: 'LinkedIn',
    active:true,
    icon: <FaLinkedin />,
  },
]
  
  return (
    <>
      <footer className='h-[20vh] bg-gray-950'>
    
        <div>
          <ul className='my-8 flex md:gap-36 justify-center'>
            {
              links?.map((l) =>(
                l.active ? (<li
                key={l.name}
                className='text-[14px] m-2 px-3
                  md:text-[1.5rem]
                  border-r-2 '
                >
                  <a 
                    href={l.slug}
                    className="text-gray-400"
                    target="_blank"
                  >{l.name}</a>
                </li>) : null
              ))
            }
          </ul>
        </div>
        
        <div className='my-3 p-2 flex text-3xl justify-center'>
          {
            socialMediaAcc?.map((sma,i) =>(
              sma.active ? (
                <a className={`text-gray-200 rounded-[50%] bg-grad p-2`}>
                  {sma.icon}
                </a>
              ):null
            ))
          }
        </div>
          
        <div className='flex justify-center h-[20%] items-center'>
          <p
          className='text-grad'
          >&copy; 2025 Anuj Singh. All Rights Reserved.</p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;