import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/DogOwner.css';

function DogOwnerEventsList({  events = []  }) {
  return (
    <div className="event-list" >
      {events.map(event => (
        <Link key={event.id} to={`/DogOwnerEventsDetails/${event.id}`} >
          <div className="event">
            <h3>{event.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DogOwnerEventsList;

/*
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