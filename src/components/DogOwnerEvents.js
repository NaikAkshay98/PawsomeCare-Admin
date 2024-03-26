import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UserEventsList from '../components/DogOwnerEventsList.js';
import '../assets/DogOwner.css';

function DogOwnerEvents() {
  const [date, setDate] = useState(new Date());

  const mockEvents = [
    { 
      id: 1, 
      title: 'Sled Dog Races', 
      date: new Date(),
      image: 'https://lodgeatmooseheadlake.com/wp-content/uploads/2023/01/wildernessSledDogRace2023.jpg'
    },
    { 
      id: 2, 
      title: 'Obedience Trials', 
      date: new Date(),
      image: 'https://images.squarespace-cdn.com/content/v1/52d31774e4b0a0bfc16610a2/1485802645953-YU7QBWZ94O4168QB40RX/Group+OB' 
    }
  ];
  
  const [events, setEvents] = useState(mockEvents);

  const onDateChange = (newDate) => {
    setDate(newDate);
    filterEventsByDate(newDate);
  };

  const filterEventsByDate = (selectedDate) => {
    const filtered = events.filter(event => isSameDay(event.date, selectedDate));
    setEvents(filtered);
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
      <UserEventsList events={mockEvents} />
    </div>
  );
}

export default DogOwnerEvents;