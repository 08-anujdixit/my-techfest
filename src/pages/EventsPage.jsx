import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import EventCard from '../components/cards/EventCard'
import Button from '../components/Button.jsx'
import '../Custom.css'


const EventsPage = () => {
  const navigate=useNavigate()
  const [detail,setDetail] = useState({});
  
  const [show,setShow] = useState(false);
  
  const events=[
    { name:'Renaissance Expo',
      slug: '/register',
      description:'A super tech exibition where trailblazing innovation meets revolutionary ideas.'
    },
    { name:'Thumbnail Making',
      slug: '/register',
      description:'Thumbnail Making competition'
    },
    { name:'Character Desinging',
      slug: '/register',
      description:'Character Desinging Character Desinging'
    },
    { name:'CODE-A-THON',
      slug: '/register',
      description:'The Mini Hackathon is designed to challenge participants and test their technical skills, communication ability, and logical thinking.'
    },
    {name:'Tech Treasure Hunt',
      slug: '/register',
      description:'Treasure Hunting Competition'
    },
    {name:'Brain & Code',
      slug: '/register',
      description:'Coding competition'
    },
    {name:'Logo Desinging',
      slug: '/register',
      description:'Logo Desinging competition'
    },
  ]
  
  return (
    <>
    <div className="p-8 flex flex-wrap grid md:grid-cols-2 gap-[2rem] md:gap-8 justify-center reverseFade">
          {
            events.map((event,index) =><EventCard
            key={index}
            event={event}
            onClick={()=>{
              setDetail(event);
              !show?setShow((prev)=>!prev):null;
            }}
            />)
          }
    </div>
    <container
    className={` w-[100%] h-auto p-[2rem]  rounded-xl fixed top-[5rem] md:top-[7rem] z-[5] ${show?'':'hidden'}
    `}
    >
      <div
      className="bg-transparent-blur border-[1px] border-gray-400 p-[1rem]"
      >
        <button
        className='w-[95%] text-end text-2xl text-white mb-4'
        onClick={()=>{
          setShow((p)=>!p);
        }}
        >X</button>
        <div className="text-white rounded-xl w-[100%] h-full">{detail.description?detail.description:null }
        </div>
        <Button
        css='mt-4'
        onClick={()=>{
          navigate(detail.slug)
        }}
        >
          Register »
        </Button>
      </div>
    </container>
    
    </>
  )
}


export default EventsPage;