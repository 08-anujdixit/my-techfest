import React, {useEffect, useState} from 'react';
import '../index.css'
import '../Custom.css'
import {Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'


export default function Navbar(){
  const navigate = useNavigate()
  const [view, setView]= useState(true)
  const toggleMenu=()=>{
    
  }
  
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
      name:"Registration",
      slug:"/register",
      active:false,
    },
    {
      name: "Login",
      slug:"/login",
      active:true,
    },
    {
      name: "Logout",
      slug:"/logout",
      active:false,
    }
    ]
  
  return (
    <header 
    className="h-auto w-auto">
      <ul
      className='flex ml-auto justify-around'
      >
        <li>
          <Link
          to='/'
          >
            <Logo
            h="h-[4rem]"
            w="w-[4rem]"
            custom_style='rounded-full'
            />
          </Link>
        </li>
        {
          navBar.map((item) => 
          item.active ? (
            <li key={item.name}>
              <Button
              onClick={()=>navigate(item.slug)}
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

