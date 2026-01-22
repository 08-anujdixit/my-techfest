import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import EventCard from '../components/cards/EventCard'
import Button from '../components/Button.jsx'
import '../Custom.css'
import tflogo from '../assets/images/Tflogo.jpg'
import expo from '../assets/images/expo-renaissance.jpg'
import thumbnail from '../assets/images/thumbnail-making.jpg'
import character from '../assets/images/character-designing.jpg'
import hackathon from '../assets/images/hackathon.jpg'

import logodesign from '../assets/images/logo-designing.jpg'
import debate from '../assets/images/raft-debate.jpg'

import quize from '../assets/images/it-quiz.jpg'


const EventsPage = () => {
  
  const navigate=useNavigate()
  
  const [detail,setDetail] = useState({});
  
  const [show,setShow] = useState(false);
  
  const events=[
    { name:'Expo Renaissance',
      description:'Expo Renaissance is a technology exhibition that showcases innovative projects in robotics, software development, artificial intelligence, and machine learning. Participants present original projects through working models or digital demonstrations, focusing on innovation, technical depth, and real-world relevance. Visitors can explore ideas, interact with creators, and vote for their favorite project in the People’s Choice Award.',
      image: expo,
    },
    { 
      name:'Last Protocol',
      description:'A thought-provoking tech debate where participants represent different tech roles in a futuristic crisis scenario. They argue why their chosen role deserves to survive, followed by rebuttals. Judged on clarity, confidence, originality, and rebuttal strength.',
      image: debate,
    },
    {name:'Brand Blitz',
      description:'Brand Blitz is a creative competition where participants design original logos from scratch within a limited time. The event evaluates creativity, simplicity, relevance, and visual impact while encouraging participants to express brand identity through thoughtful design.',
      image: logodesign,
    },
    {name:'IT Quiz',
      description:'The IT Quiz is an engaging competition that tests participants’ knowledge of computer science, information technology, current tech trends, and logical reasoning. Open to students from all branches, the event encourages quick thinking, teamwork, and problem-solving through a two-round format—an initial computer-based test (CBT) followed by an on-stage quiz round with buzzer questions and rapid-fire challenges. With live scoring and an energetic atmosphere, the IT Quiz offers a perfect blend of learning and competition.',
      image: quize,
    },
    { name:'CODE-A-THON',
      description:'The Hackathon is an intensive 8-hour coding event where teams design, develop, and deploy innovative technical solutions from scratch. Participants work on a single problem statement using their preferred tech stack while focusing on UI/UX, functionality, innovation, and presentation. This event promotes teamwork, problem-solving, and hands-on development skills.',
      image: hackathon,
    },
    { name:'Pixel Perfect',
      description:'The Pixel Perfect event challenges participants to design creative and visually appealing thumbnails using tools like PicsArt or Canva. With a strong focus on creativity, originality, and presentation, this event tests participants’ design skills under time constraints, encouraging quick thinking and artistic expression.',
      image:thumbnail,
    },
    { name:'Future Forge',
      description:'Future Forge is a hand-drawn art competition where participants create original characters based on a theme revealed on the spot. This event emphasizes creativity, storytelling, visual appeal, and originality while strictly prohibiting digital or AI-generated artwork.',
      image: character,
    },
  ]
  
  useEffect(()=>{
    
    if(show){
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
    <div className={`p-8 flex flex-wrap grid md:grid-cols-2 gap-[2rem] md:gap-8 justify-center items-center `}>
          {
            events.map((event,index) =>
              <EventCard
              key={index}
              event={event}
              onClick={(e)=>{
                setDetail(event);
                !show?setShow((prev)=>!prev):null;
              }}
              ><img 
                src={event.image?event.image:tflogo}
                alt={event.name}
                className="h-auto w-auto md:w-[15rem] m-8 object-contain border-[1px] border-gray-400"/>
                </EventCard>
            )
          }
    </div>
    <container
    className={` w-[100%] h-full p-[2rem] rounded-xl fixed top-0 z-[1000] flex justify-center items-center ${show?'bg-transparent-blur':'hidden'}
    `}
    >
      <div
      className="bg-transparent-blur border-[1px] border-gray-400 p-[1rem] reverseFade font-bold"
      >
        <button
        className='w-[95%] text-end text-2xl text-white mb-4'
        onClick={()=>{
          setShow((p)=>!p);
        }}
        >X</button>
        
        <div className="text-white rounded-xl w-[100%] h-full text-justify">{detail.description?detail.description:null }
        <br/>(For more information about the event, please refer to the brochure or contact the event coordinators.)
        </div>
        
        <Button
        css='mt-4'
        onClick={()=>{
          navigate('/register')
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