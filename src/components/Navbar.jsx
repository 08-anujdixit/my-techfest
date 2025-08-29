import React, {useEffect, useState} from 'react';
import '../index.css'
import '../Custom.css'
import {Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'
import { useSelector } from 'react-redux';
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar(){
  const navigate = useNavigate();
  const userStatus=useSelector(
    state=>state.user.status
  );
  const [toggleMenu,setToggleMenu] = useState(true)
  
  const navBar=[
    {
      name:"Home",
      slug:"/home",
      active:true,
    },
    {
      name:"About",
      slug:"/about",
      active:true,
    },
    {
      name:"Events",
      slug:"/events",
      active:true,
    },
    {
      name:"Hackathon",
      slug:"/codeathon",
      active:true,
    },
    {
      name:"Expo",
      slug:"/expo",
      active:true,
    },
    {
      name:"Registration",
      slug:"/register",
      active:true,
    },
    {
      name: "Login",
      slug:"/login",
      active: !userStatus,
    },
    {
      name: "Logout",
      slug:"/logout",
      active: userStatus,
    }
    ]
  
  return (
    <header
    className="h-auto w-full px-2 sticky top-0 z-40 mb-5">
      <ul
      className='mt-3 px-2 flex justify-between items-center bg-transparent-blur border-[0.5px] border-gray-500 w-full'
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
          className='w-[3rem] flex justify-center text-2xl text-white rounded font-extrabold'
          onClick={()=>{setToggleMenu((prev)=>!prev)}}
          >
            {toggleMenu? <HiOutlineMenu/> : <RxCross2 />}
          </button>
        </li>
      </ul>
      {
          (<div className={`absolute left-[-20rem] top-0 ${!toggleMenu?'slide':'revers-slide'}
          bg-transparent-blur border-[1px] border-gray-400 w-[10rem] md:w-[15rem] p-10
          `}>
          {
            navBar.map((item) => 
            item.active ? (
                <button
                key={item.name}
                className='w-full text-[12px] rounded
                my-3 text-white 
                text-white object-contain
                hover:border-[1px]
                hover:border-white 
                font-extrabold
                '
                onClick={()=>{
                  navigate(item.slug)
                }}
                >
                  {item.name}
                </button>
              ):null
            )
          }
          </div>) 
        }
    </header>
  )
}

