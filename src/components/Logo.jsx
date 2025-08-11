import React,{useId} from 'react';
import logo from '../assets/logo/TechFest5.0.png'
import '../Custom.css'

const Logo = React.forwardRef(function Logo ({
  h='h-[20rem]',
  w='w-[20rem]',
  animate='',
  custom_style=''
},ref){
  const id = useId()
  return (
    <>
      <img 
      src={logo}
      className={`
      ${h}
      ${w}
      ${animate}
      ${custom_style}
      `}
      ref={ref}
      id={id}
      />
    </>
  )
})


export default Logo;