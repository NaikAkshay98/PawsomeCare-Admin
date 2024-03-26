import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventList from './EventList.js';
import '../assets/Guest.css';

function Events() {
  const [date, setDate] = useState(new Date());

  const mockEvents = [
    { id: 1, title: 'Sled Dog Races', date: new Date(new Date().setDate(new Date().getDate() + 1)), image: '/path-to-your-image/sled-dog-races.jpg' },
    { id: 2, title: 'Obedience Trials', date: new Date(new Date().setDate(new Date().getDate() + 2)), image: '/path-to-your-image/obedience-trials.jpg' },
    { id: 3, title: 'Puppy Training 101', date: new Date(new Date().setDate(new Date().getDate() + 3)), image: '/path-to-your-image/puppy-training.jpg' },
    { id: 4, title: 'Canine Good Citizen Test', date: new Date(new Date().setDate(new Date().getDate() + 5)), image: '/path-to-your-image/canine-good-citizen.jpg' },
    { id: 5, title: 'Dog Agility Competition', date: new Date(new Date().setDate(new Date().getDate() + 7)), image: '/path-to-your-image/dog-agility.jpg' },
    { id: 6, title: 'Doggy Swim Day', date: new Date(new Date().setDate(new Date().getDate() + 9)), image: '/path-to-your-image/dog-swim-day.jpg' },
    { id: 7, title: 'Bark in the Park', date: new Date(new Date().setDate(new Date().getDate() + 11)), image: '/path-to-your-image/bark-in-the-park.jpg' },
    { id: 8, title: 'Fancy Dress Parade', date: new Date(new Date().setDate(new Date().getDate() + 13)), image: '/path-to-your-image/fancy-dress-parade.jpg' },
    { id: 9, title: 'Guide Dogs Demo', date: new Date(new Date().setDate(new Date().getDate() + 15)), image: '/path-to-your-image/guide-dogs-demo.jpg' },
    { id: 10, title: 'Rescue Dog Awareness Day', date: new Date(new Date().setDate(new Date().getDate() + 17)), image: '/path-to-your-image/rescue-dog-awareness.jpg' },
    { id: 11, title: 'Night Walk for Strays', date: new Date(new Date().setDate(new Date().getDate() + 19)), image: '/path-to-your-image/night-walk-strays.jpg' },
  { id: 12, title: 'Canine First Aid Workshop', date: new Date(new Date().setDate(new Date().getDate() + 1)), image: '/path-to-your-image/canine-first-aid.jpg' },
  { id: 13, title: 'Meet the Breeds', date: new Date(new Date().setDate(new Date().getDate() + 3)), image: '/path-to-your-image/meet-the-breeds.jpg' },
  { id: 14, title: 'Dog Photography 101', date: new Date(new Date().setDate(new Date().getDate() + 5)), image: '/path-to-your-image/dog-photography.jpg' },
  { id: 15, title: 'Beach Day with Dogs', date: new Date(new Date().setDate(new Date().getDate() + 7)), image: '/path-to-your-image/beach-day.jpg' },
  { id: 16, title: 'Urban Mushing Seminar', date: new Date(new Date().setDate(new Date().getDate() + 9)), image: '/path-to-your-image/urban-mushing.jpg' },
  { id: 17, title: 'Indoor Agility for Small Dogs', date: new Date(new Date().setDate(new Date().getDate() + 1)), image: '/path-to-your-image/indoor-agility.jpg' },
  { id: 18, title: 'Dog Yoga Class', date: new Date(new Date().setDate(new Date().getDate() + 3)), image: '/path-to-your-image/dog-yoga.jpg' },
  { id: 19, title: 'Advanced Obedience Workshop', date: new Date(new Date().setDate(new Date().getDate() + 5)), image: '/path-to-your-image/advanced-obedience.jpg' },
  { id: 20, title: 'Therapy Dog Training Introduction', date: new Date(new Date().setDate(new Date().getDate() + 7)), image: '/path-to-your-image/therapy-dog-training.jpg' },
  ];
  
  
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    // Sort mockEvents by date initially
    const sortedEvents = mockEvents.sort((a, b) => a.date - b.date);
    setAllEvents(sortedEvents);
    setEvents(sortedEvents);
  }, []);

  const onDateChange = (newDate) => {
    setDate(newDate);
    filterEventsByDate(newDate);
  };

  const filterEventsByDate = (selectedDate) => {
    if (!selectedDate) {
      setEvents(allEvents);
      return;
    }
    const filtered = allEvents.filter(event => isSameDay(event.date, selectedDate));
    setEvents(filtered.length > 0 ? filtered : allEvents);
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
        
        <Calendar
          onChange={onDateChange}
          value={date}
        />
      </div>
      <EventList events={events} className="event" />
    </div>
  );
}

export default Events;
