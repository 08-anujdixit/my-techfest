import React, {useEffect, useState} from 'react';
import '../index.css'
import '../Custom.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar(){
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleMenu,setToggleMenu] = useState(false);
  const [download,setDownload] = useState({
    status:false,
    fade:'reverseFade',
  });
  useEffect(()=>{
    setTimeout(()=>{
      setToggleMenu((prev)=>false);
    }, 1000);
  },[location]);
  
  const navBar=[
    {
      name:"Home",
      slug:"/home",
      active:true,
    },
    {
      name:"About Us",
      slug:"/about/#aboutus",
      active:true,
    },
    {
      name:"Events",
      slug:"/events",
      active: true,
    },
    {
      name:"Brochure",
      slug:"",
      active:true,
    },
    {
      name:"Hackathon",
      slug:"/codeathon",
      active:true,
    },
    {
      name:"Registration",
      slug:"/register",
      active:true,
    },
    {
      name:"Contact Us",
      slug:"/about/#contactus",
      active:true,
    },
    {
      name:"FAQ",
      slug:"/about/#query",
      active:true,
    },
  ];
  
  return (
    <header
    className="h-auto w-full px-2 sticky top-2 z-[1100] mb-5">
      <ul
      className='mt-3 px-2 flex justify-between items-center bg-transparent-blur border-[0.8px] border-gray-500 w-full transition-all hover:border-white'
      >
        <li>
          <Link
          to='/'
          >
            <Logo
            h="h-[3rem] md:h-[5rem]"
            w="w-[3rem] md:w-[5rem]"
            custom_style='rounded-full'
            />
          </Link>
        </li>
        <li>
          <button
          className={`w-[3rem]  flex justify-center text-2xl md:text-4xl md:mr-[1rem] text-white rounded font-extrabold 
          `}
          onClick={()=>{setToggleMenu((prev)=>!prev)}}
          >
            {toggleMenu? <RxCross2 /> : <HiOutlineMenu/>}
          </button>
        </li>
      </ul>
      {
          (<div className={`absolute left-[-20rem] top-0 ${toggleMenu?'slide':'revers-slide'}
          bg-transparent-blur border-[1px] border-gray-400 w-[10rem] md:w-[15rem] p-3 `}>
          {
            navBar.map((item) => 
            item.active ? (
                <button
                key={item.name}
                className='
                w-full text-[12px] 
                rounded md:text-[18px]
                my-3 text-white 
                text-white object-contain
                hover:border-[1px]
                hover:border-white 
                font-bold
                '
                onClick={()=>{
                  navigate(item.slug)
                }}
                >
                  <a
                  href={item.name=='Brochure'?'/brochure/brochure.pdf':item.slug}
                  download={item.name=='Brochure'?true:false}
                  onClick={item.name=='Brochure'?
                  (e)=>{
                    setDownload((p)=>({
                      ...p,
                      status:!status,
                    }));
                    setTimeout(()=>{
                      setDownload((p)=>({
                      ...p,
                      fade: 'customFade',
                    }));
                    },1500);
                    setDownload((p)=>({
                      status:!status,
                      fade: 'reverseFade'
                    }));
                  }:false}
                  >{item.name}</a>
                </button>
              ):null
            )
          }
          </div>) 
        }
        
      <div className={`w-full h-[4rem] fixed top-[6rem] flex justify-center items-center transition-all ${download.status?download.fade:"hidden"}`}>
        <div className="p-2 inline bg-gray-200 rounded-3xl">
          <span className="text-grad font-extrabold text-xl">
            Download started!
          </span>
        </div>
      </div>
    </header>
  )
}

