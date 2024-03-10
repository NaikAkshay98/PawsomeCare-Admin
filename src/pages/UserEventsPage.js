import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserEventsList from './UserEventsList.js';
import '../css/UserEventsPage.css';

function EventPage() {
  const [date, setDate] = useState(new Date());

  // Sample events data
  const mockEvents = [
    { 
      id: 1, 
      title: 'Sled Dog Races', 
      date: new Date(),
      image: '/path-to-your-image/sled-dog-races.jpg' // update with the correct path
    },
    { 
      id: 2, 
      title: 'Obedience Trials', 
      date: new Date(),
      image: '/path-to-your-image/obedience-trials.jpg' // update with the correct path
    }
    // ... add more events as needed
  ];
  

  // Instead of fetching, use the mock data
  const [events, setEvents] = useState(mockEvents);

  const onDateChange = (newDate) => {
    setDate(newDate);
    filterEventsByDate(newDate);
  };

  const filterEventsByDate = (selectedDate) => {
    // Filter your events based on the selected date
    const filtered = events.filter(event => isSameDay(event.date, selectedDate));
    setEvents(filtered); // Use setEvents to filter displayed events
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="event-page">
      <div className="calendar-container">
        <h3>Events</h3>
        <Calendar
          onChange={onDateChange}
          value={date}
        />
      </div>
      <UserEventsList events={events} />
    </div>
  );
}

export default EventPage;