import React,{useState} from 'react';
import '../index.css'
import '../Custom.css'
import {Link} from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";



const Footer = () => {
  
  const [download,setDownload] = useState({
    status:false,
    fade:'reverseFade',
  });
  
  const quickLinks =[
    {
      name:"Register Now",
      slug:"/register",
      active:true,
    },
    {
      name:"Brochure",
      slug:"",
      active:true,
    },
    {
      name:"Events",
      slug:"/events",
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
      name:"Sponsors",
      slug:"/about/#sponsors",
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
    title: 'WhatsApp',
    active:true,
    icon: <FaWhatsapp />,
    slug:"https://chat.whatsapp.com/EbkmDTXP84ZKZ6DJyvdyc0",
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
    slug:"https://www.linkedin.com/company/techfest5-0/",
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
      <footer className='h-auto py-4 bg-gray-900 w-full relative z-[500] bottom-0'>
        <div className='flex items-center px-4 md:px-6 pb-2'>
          <Link
          to='/'
          >
            <Logo
              h="h-[2.5rem] md:h-[4rem]"
            />
          </Link>
          <p className='w-auto font-bold text-grad py-1 text-xl md:text-4xl'>Quick Links</p>
        </div>
        
        <div className={`w-full h-[4rem] fixed top-[6rem] flex justify-center items-center transition-all ${download.status?download.fade:"hidden"}`}>
          <div className="p-2 inline bg-gray-200 rounded-3xl">
            <span className="text-grad font-extrabold text-sm">
              Download started!
            </span>
          </div>
        </div>
        
        <div className='md:flex md:justify-center md:items-center w-auto h-auto px-2'>
          <ul 
          className='my-0 grid grid-cols-3 gap-y-0 w-full' >
            {
              quickLinks?.map((l) =>(
                l.active ? (<li
                key={l.name}
                className='text-[0.8rem] my-1
                  md:text-[1.5rem] text-center
                  '
                >
                  <a 
                    href={l.name=='Brochure'?'/brochure/Techfest 5.0 Brochure.pdf':l.slug}
                    download={l.name=='Brochure'?true:false}
                    onClick={l.name=='Brochure'?
                    (e)=>{
                      setTimeout(()=>{
                        setDownload((p)=>({
                          ...p,
                          status:!status,
                        }));
                      }, 500 );
                      setTimeout(()=>{
                        setDownload((p)=>({
                        ...p,
                        fade: 'customFade',
                      }));
                      },1000);
                      setDownload((p)=>({
                        status:!status,
                        fade: 'reverseFade'
                      }));
                    }:null}
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
                target="_blank"
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
          className='text-grad md:text-2xl font-bold'
          >&copy; TechFest 5.0 — All Rights Reserved.</p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;