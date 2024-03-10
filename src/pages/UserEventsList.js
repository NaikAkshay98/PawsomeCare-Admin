import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UserEventsList.css';

function EventList({  events = []  }) {
  return (
    <div className="event-list" >
      {events.map(event => (
        
        <Link key={event.id} to={`eventdetails/${event.id}`} >
          
          <div className="event">
            <h3>{event.title}</h3>
            {/* Other event details */}
          </div>
          
        </Link>
        
      ))}
    </div>
  );
}

export default EventList;

/*
//code for event card 
return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event-card">
          <img src={event.image} alt={event.title} className="event-image" />
          <h3 className="event-title">{event.title}</h3>
        </div>
      ))}
    </div>
  );

*/