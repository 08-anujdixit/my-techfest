import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from '../Button';
import '../../Custom.css';
import pfp from '../../assets/images/CollegeBg.jpg'
  
const EventCard = ({event,onClick, ...props}) => {
  
  const navigate = useNavigate();
  
  return (
      <container
      className={`bg-grad p-[0.7px] rounded-xl w-[100%] h-auto`}
      {...props}
      >
          <div className="bg-[#000011] rounded-xl p-4 h-[100%] ">
            <h1 className="text-grad text-4xl md:text-6xl text-center md:text-[2rem] md:h-16 md:flex md:items-center md:justify-center ">
              {event.name?event.name:null}
            </h1>
            
            <div className="flex justify-center">
              <img 
              src={event.image?event.image:pfp}
              alt={event.name}
              className="h-auto w-auto md:w-[15rem] m-8 object-contain"/>
            </div>
           
            <div className="flex justify-center">
                <Button
                type='button'
                onClick={onClick}
                >View Details »</Button>
            </div>
          </div>
      </container>
  )
}


export default EventCard;