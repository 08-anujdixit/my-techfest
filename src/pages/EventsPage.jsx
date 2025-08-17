import React from 'react';
import EventCard from '../components/cards/EventCard'

const EventsPage = () => {
  
  const events=[
    {name:'Hackathon'},
    {name:'Expo'},
    {name:'IT Quiz'},
    {name:'Hackathon'},
    {name:'Expo'},
    {name:'IT Quiz'},
    {name:'Hackathon'},
    {name:'Expo'},
    {name:'IT Quiz'},
    {name:'Hackathon'},
    {name:'Expo'},
    {name:'IT Quiz'},
  ]
  
  return (
    <div className="p-8 flex flex-wrap grid md:grid-cols-3 gap-4 md:gap-8 justify-center">
          {
            events.map((event,index) =><EventCard
            key={index}
            event={event}/>)
          }
    </div>
  )
}



export default EventsPage;