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
          className={`inline-bock px-2 py-1 bg-grad text-white my-4 object-contain
            shadow-[0_0_5px_#810081,0_0_5px_#810081]
            md:w-36 md:text-xl md:text-center
            hover:border-2 
            hover:border-black 
            hover:text-black font-extrabold
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