import React from 'react';
import EventCard from '../components/cards/EventCard'
import '../Custom.css'


const EventsPage = () => {
  
  const events=[
    { name:'Renaissance Expo',
      slug: '/events/event',
      description:'A super tech exibition where trailblazing innovation meets revolutionary ideas.'
    },
    { name:'Hackathon',
      slug: '/codeathon',
      description:'The Mini Hackathon is designed to challenge participants and test their technical skills, communication ability, and logical thinking.'
    },
    {name:'Hunt',
      slug: 'event'},
    {name:'MUN',
      slug: 'event'},
  ]
  
  return (
    <div className="p-8 flex flex-wrap grid md:grid-cols-2 gap-[2rem] md:gap-8 justify-center reverseFade">
          {
            events.map((event,index) =><EventCard
            key={index}
            event={event}
            onClick={()=>{
              alert(event.description);
            }}
            />)
          }
    </div>
  )
}



export default EventsPage;