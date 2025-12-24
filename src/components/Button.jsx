import React from 'react';
import '../Custom.css'

const Button = ({
  css='',
  btnCss='',
  children,
  ...props
}) => {
  return (
    <div
    className={`bg-grad w-auto inline-flex rounded-3xl p-[1px] ${css}`}
    >
      <button 
          className={`inline-bock px-4 py-2 text-white object-contain
            rounded-3xl bg-[#000011] md:w-fit
            md:w-36 md:text-xl md:text-center
            hover:text-white font-extrabold
            ${btnCss}
          `}
          {...props}
          >
            {children}
          </button>
    </div>
  );
};


export default Button;