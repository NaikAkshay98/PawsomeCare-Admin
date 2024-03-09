import React, { useState } from 'react';
import '../css/AdminEventsDetails.css'; // Make sure you have a CSS file for styling

const EventsDetails = () => {
  const [events, setEvents] = useState([
    { name: 'Event Name 1' }, 
    { name: 'Event Name 2' },
    // ... more events
  ]);

  // State for new event form
  const [newEvent, setNewEvent] = useState({
    imageName: '',
    name: '',
    description: '',
    location: '',
    link: '',
    timings: ''
  });

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    // Logic to add the new event, typically involving an API call
    console.log('Adding event:', newEvent);
    // After adding, clear the form
    setNewEvent({
      imageName: '',
      name: '',
      description: '',
      location: '',
      link: '',
      timings: ''
    });
  };

  const handlePreviewEvent = (eventName) => {
    // Logic to preview an event, could navigate to a different route or open a modal
    console.log('Previewing event:', eventName);
  };

  const handleDeleteEvent = (eventName) => {
    // Logic to delete an event, typically involving an API call
    console.log('Deleting event:', eventName);
    setEvents(events.filter(event => event.name !== eventName));
  };

  return (
    <div className="events-details-container">
      <div className="search-container">
        <input type="text" placeholder="Search Event" />
        <button>Search</button>
      </div>
      <div className="event-form">
        {/* Form inputs for event details */}
        <input type="text" placeholder="Upload Image" name="imageName" value={newEvent.imageName} onChange={handleInputChange} />
        <input type="text" placeholder="Event Name" name="name" value={newEvent.name} onChange={handleInputChange} />
        <input type="text" placeholder="Event Description" name="description" value={newEvent.description} onChange={handleInputChange} />
        <input type="text" placeholder="Location" name="location" value={newEvent.location} onChange={handleInputChange} />
        <input type="text" placeholder="Link" name="link" value={newEvent.link} onChange={handleInputChange} />
        <input type="text" placeholder="Timings" name="timings" value={newEvent.timings} onChange={handleInputChange} />
        <button onClick={handleAddEvent}>ADD Event</button>
      </div>
      <div className="events-list">
        {/* List existing events with preview and delete options */}
        {events.map((event, index) => (
          <div key={index} className="event">
            <span>{event.name}</span>
            <button onClick={() => handlePreviewEvent(event.name)}>Preview</button>
            <button onClick={() => handleDeleteEvent(event.name)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsDetails;
