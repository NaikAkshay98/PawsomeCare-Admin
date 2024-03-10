import React from 'react';
//import { useParams } from 'react-router-dom';

function EventDetails() {
  //let { eventId } = useParams();

  // Fetch the event details based on eventId or use passed-down props
  // For now, let's assume you have the event data available
  const event = {
    title: 'Obedience Trials',
    description: 'Obedience Trials, such as the prestigious AKC Obedience Classic...',
    // ... other event details
  };

  return (
    <div className="event-detail-page">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      {/* Render other details */}
    </div>
  );
}

export default EventDetails;