import React from 'react';

function EventDetails() {

  const event = {
    id:2,
    title: 'Obedience Trials',
    description: 'Obedience Trials, such as the prestigious AKC Obedience Classic...'
  };

  return (
    <div className="event-detail-page">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetails;