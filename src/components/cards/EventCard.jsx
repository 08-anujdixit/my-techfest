// EVENT NAME
//EVENT IMAGE
// EVENT REGISTRATION LINK
//OTHER DETAILS

import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../Button';
import '../../Custom.css';
import pfp from '../../assets/images/CollegeBg.jpg'
  
const EventCard = ({event, ...props}) => {
  
  const navigate = useNavigate();
  return (
      <container
      className={`bg-grad p-1 rounded-xl w-[100%] h-auto`}
      {...props}
      >
          <div className="bg-black rounded-xl p-2 h-[auto]">
            <h1 className="text-grad text-4xl md:text-6xl text-center ">
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
              css='rounded'
              type='button'
              onClick={()=>navigate('/')}
            >View Details</Button>
            </div>
          </div>
      </container>
  )
}


export default EventCard;