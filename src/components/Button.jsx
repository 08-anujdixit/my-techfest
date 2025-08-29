import React from 'react';
import '../Custom.css'

const Button = ({
  css='',
  children,
  ...props
}) => {
  return (
    <div
    className={`bg-grad w-auto inline-flex rounded-3xl p-[1px] ${css}`}
    >
      <button 
          className={`inline-bock px-4 py-2 text-white object-contain
            rounded-3xl bg-black md:w-fit
            md:w-36 md:text-xl md:text-center
            hover:text-white font-extrabold
          `}
          {...props}
          >
            {children}
          </button>
    </div>
  );
};


export default Button;