import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Admin.css'; 

const EventsDetails = () => {
  const [events, setEvents] = useState([
    { name: 'Event Name 1' }, 
    { name: 'Event Name 2' }
  ]);

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
    console.log('Adding event:', newEvent);
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
    console.log('Previewing event:', eventName);
  };

  const handleDeleteEvent = (eventName) => {
    console.log('Deleting event:', eventName);
    setEvents(events.filter(event => event.name !== eventName));
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <nav>
          <ul className="admin-menu">
            <li><Link to="/AdminHomePage">Home Page</Link></li>
            <li><Link to="/AdminVerifyCT">Verify Caretaker</Link></li>
            <li><Link to="/AdminReviews">Reviews</Link></li>
            <li><Link to="/AdminManageUsers">Manage Users</Link></li>
            <li><Link to="/AdminEventDetails">Event Details</Link></li>
            <li><Link to="/AdminEmailSupport">Email Support</Link></li>
            <li><Link to="/AdminProfile">LogOut</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="admin-main-content">
        <div className="event-form">
          <input type="text" placeholder="Upload Image" name="imageName" value={newEvent.imageName} onChange={handleInputChange} />
          <input type="text" placeholder="Event Name" name="name" value={newEvent.name} onChange={handleInputChange} />
          <input type="text" placeholder="Event Description" name="description" value={newEvent.description} onChange={handleInputChange} />
          <input type="text" placeholder="Location" name="location" value={newEvent.location} onChange={handleInputChange} />
          <input type="text" placeholder="Link" name="link" value={newEvent.link} onChange={handleInputChange} />
          <input type="text" placeholder="Timings" name="timings" value={newEvent.timings} onChange={handleInputChange} />
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
        <div className="events-list">
          {events.map((event, index) => (
            <div key={index} className="event">
              <span>{event.name}</span>
              <button onClick={() => handlePreviewEvent(event.name)}>Preview</button>
              <button onClick={() => handleDeleteEvent(event.name)}>Delete</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventsDetails;
