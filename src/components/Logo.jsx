import React,{useId} from 'react';
import logo from '../assets/logo/TechFest5.0.png'
import '../Custom.css'

const Logo = React.forwardRef(function Logo ({
  h='h-[12rem]',
  w='w-auto',
  animate='',
  custom_style=''
},ref){
  const id = useId()
  return (
    <div
    className='p-2'
    >
      <img 
      src={logo}
      className={`object-container
      ${h}
      ${w}
      // ${animate}
      ${custom_style}
      `}
      ref={ref}
      id={id}
      />
    </div>
  )
})


export default Logo;