import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import EventCard from '../components/cards/EventCard'
import Button from '../components/Button.jsx'
import '../Custom.css'
import tflogo from '../assets/images/Tflogo.jpg'
import expo from '../assets/images/renaissance-expo.jpg'
import thumbnail from '../assets/images/thumbnail-making.jpg'
import character from '../assets/images/character-designing.jpg'
import hackathon from '../assets/images/hackathon.jpg'
import braincode from '../assets/images/brain-n-code.jpg'
import logodesign from '../assets/images/logo-desing.jpg'


const EventsPage = () => {
  const navigate=useNavigate()
  const [detail,setDetail] = useState({});
  const [show,setShow] = useState(false);
  const events=[
    { name:'Renaissance Expo',
      slug: '/register',
      description:'Expo Renaissance is a technology exhibition that showcases innovative projects in robotics, software development, artificial intelligence, and machine learning. Participants present original projects through working models or digital demonstrations, focusing on innovation, technical depth, and real-world relevance. Visitors can explore ideas, interact with creators, and vote for their favorite project in the People’s Choice Award.',
      image: expo,
    },
    { name:'Thumbnail Making',
      slug: '/register',
      description:'The Thumbnail Making event challenges participants to design creative and visually appealing thumbnails using tools like PicsArt or Canva. With a strong focus on creativity, originality, and presentation, this event tests participants’ design skills under time constraints, encouraging quick thinking and artistic expression.',
      image:thumbnail,
    },
    { name:'Character Desinging',
      slug: '/register',
      description:'Character Designing is a hand-drawn art competition where participants create original characters based on a theme revealed on the spot. This event emphasizes creativity, storytelling, visual appeal, and originality while strictly prohibiting digital or AI-generated artwork.',
      image: character,
    },
    { name:'CODE-A-THON',
      slug: '/register',
      description:'The Hackathon is an intensive 8-hour coding event where teams design, develop, and deploy innovative technical solutions from scratch. Participants work on a single problem statement using their preferred tech stack while focusing on UI/UX, functionality, innovation, and presentation. This event promotes teamwork, problem-solving, and hands-on development skills.',
      image: hackathon,
    },
    {name:'Tech Treasure Hunt',
      slug: '/register',
      description:'Tech Treasure Hunt is an exciting team-based challenge that blends technology, logic, and problem-solving. Teams solve sequential technical clues and QR-based challenges across the campus while racing against time. Accuracy, speed, and teamwork determine the final winner.',
      image:null,
    },
    {name:'Brain & Code',
      slug: '/register',
      description:'Brain and Code is a unique two-phase programming event where one participant writes pseudocode while the other converts it into executable code—without direct communication. This event tests logical clarity, understanding, and coding accuracy, making it a true challenge of coordination and analytical skills.',
      image: braincode,
    },
    {name:'Logo Desinging',
      slug: '/register',
      description:'Logo Designing is a creative competition where participants design original logos from scratch within a limited time. The event evaluates creativity, simplicity, relevance, and visual impact while encouraging participants to express brand identity through thoughtful design.',
      image: logodesign,
    },
  ]
  
  useEffect(()=>{
    if(show){
      navigate('#events');
      document.body.style.overflow='hidden';
    }
    else{
      document.body.style.overflow='';
    }
  },[show]);
  
  return (
    <>
    <div 
    id='events'
    className='my-6 text-center'>
      <h1 className='text-grad text-5xl md:text-6xl font-bold tracking-wide'>
        Events
      </h1>
    </div>
    <div className={`p-8 flex flex-wrap grid md:grid-cols-2 gap-[2rem] md:gap-8 justify-center items-center reverseFade`}>
          {
            events.map((e,index) =>
            <EventCard
            key={index}
            event={e}
            onClick={()=>{
              setDetail(e);
              !show?setShow((prev)=>!prev):null;
            }}
            ><img 
              src={e.image?e.image:tflogo}
              alt={e.name}
              className="h-auto w-auto md:w-[15rem] m-8 object-contain"/>
              </EventCard>
            )
          }
    </div>
    <container
    className={` w-[100%] h-full p-[2rem] rounded-xl fixed top-0 z-[1000] flex justify-center items-center ${show?'bg-transparent-blur':'hidden'}
    `}
    >
      <div
      className="bg-transparent-blur border-[1px] border-gray-400 p-[1rem] reverseFade"
      >
        <button
        className='w-[95%] text-end text-2xl text-white mb-4'
        onClick={()=>{
          setShow((p)=>!p);
        }}
        >X</button>
        <div className="text-white rounded-xl w-[100%] h-full text-justify">{detail.description?detail.description:null }
        <br/>(For more information on the event, please refer to the brochure.)
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