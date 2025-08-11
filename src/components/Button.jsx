import React from 'react';
import '../Custom.css'

const Button = ({
  css='',
  children,
  ...props
}) => {
  return (
    <>
      <button 
          className={`inline-bock px-4 py-2 duration-200 hover:bg-blue-100 rounded-full bg-grad text-white text-[10px] rounded-xl my-4 object-contain
            shadow-[0_0_5px_#810081,0_0_5px_#810081]
            md:w-36 md:text-xl md:text-center
            hover:border-2 
            hover:border-black 
            hover:text-black hover:font-extrabold
            ${css}
          `}
          {...props}
          >
            {children}
          </button>
    </>
  );
};


export default Button;