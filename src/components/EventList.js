import React from 'react';

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event">
          {/* Display the event title and the formatted date */}
          <h3 className="event-title">{event.title} - <span className="event-date">{event.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></h3>
          
        </div>
      ))}
    </div>
  );
}

export default EventList;
