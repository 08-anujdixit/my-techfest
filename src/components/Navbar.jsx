import React, {useEffect, useState} from 'react';
import '../index.css'
import '../Custom.css'
import {Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'
import { useSelector } from 'react-redux';

export default function Navbar(){
  const navigate = useNavigate();
  const userStatus=useSelector(
    state=>state.user.status
  );
  
  const navBar=[
    {
      name:"Home",
      slug:"/",
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
    className="h-auto w-auto sticky top-0 bg-transparent-blur z-40">
      <ul
      className='ml-auto flex justify-between'
      >
        <li>
          <Link
          to='/'
          >
            <Logo
            h="h-[4rem] md:h-[5rem]"
            w="w-[4rem] md:w-[5rem]"
            custom_style='rounded-full'
            />
          </Link>
        </li>
        {
          navBar.map((item) => 
          item.active ? (
            <li key={item.name}>
              <Button
              css='w-auto text-[12px] rounded'
              onClick={()=>{
                navigate(item.slug)
              }}
              >
                {item.name}
              </Button>
            </li>
            ):null
          )
        }
      </ul>
    </header>
  )
}

