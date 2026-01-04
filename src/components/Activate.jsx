import React,{ useState, useEffect } from 'react'
import Logo from './Logo'
import '../Custom.css'
import {Link, useNavigate} from 'react-router-dom';


const Activate = () => {
  const navigate = useNavigate();
  const [visible,setVisible] = useState(true);
  //calling for visibility effect
  useEffect(()=>{
    setTimeout(()=>{
      setVisible(!visible)
    },800);
  },[]);
  
  return (
    <>
     <div 
     className={`h-[100vh] w-full  ${visible? '' : 'hidden'} flex justify-center items-center`}>
      <Logo
      animate={`rounded-full popUp`}
      />
     </div>
     <main
    className={`${visible? 'hidden' : ''} w-full h-[100%]`}
    >
        <div 
        className="h-[100%] w-full py-10
        ">
          <h1
          className='text-[62px] text-grad text-center font-serif md:text-[6rem] reverseFade w-full
          '>TechFest 5.0</h1>
          <p className='text-xl md:text-3xl text-grad text-center font-serif reverseFade mb-[18px]' >Innovation | Inspiration | Impact</p>
          <p className='text-lg md:text-2xl text-grad text-center font-serif reverseFade my-2' >
           ( 12<sup className="text-grad">th</sup>,
            13<sup className="text-grad">th</sup> &amp;
            14<sup className="text-grad">th</sup> February 2026 )
          </p>
          <div 
          className='mt-5 w-[100%] flex justify-center'>
            <button
            onClick={()=>{
              setTimeout(()=>{
                navigate('/home');
              }, 200);
            }} 
            >
              <Logo
              animate='rounded-full animate-[spin_7s_linear_infinite]'/>
            </button>
          </div>
        </div>
        
        <div className="h-[100%] pb-20 text-center">
            <h1 
          className='text-xl text-grad text-center font-serif md:text-3xl reverseFade 
          '>Presented by</h1>
          
          <p className='text-[22px] md:text-4xl text-grad text-center font-serif reverseFade 
          ' >Department of Computer Science</p>
          
          <p className='text-[22px] md:text-4xl text-grad text-center font-serif reverseFade' >National P.G. College</p>
          <p className='text-[22px] md:text-4xl text-grad text-center font-serif reverseFade' >Lucknow</p>
          
          </div>
    </main> 
   </>
  );
};

export default Activate;