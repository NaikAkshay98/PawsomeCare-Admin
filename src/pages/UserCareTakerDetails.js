import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../css/UserCareTakerDetails.css'; // Make sure to create and style this CSS file accordingly

// Here's some mock data for the caretaker's details
const mockCaretakers = [
  {
    id: 1,
    name: 'Nikita N.',
    rating: 4.5,
    reviews: 98,
    bio: 'Dedicated and experienced caretaker, committed to providing exceptional care...',
    rate: '$18/hr',
    profilePic: 'path-to-nikita-image.jpg' // Replace with the actual path to the image
  },
  // ... other mock caretakers
];

function CaretakerDetailPage() {
    let navigate = useNavigate();

  // Function to handle navigation
  
  const handleBookAppointmentClick = () => {
    navigate(`/user/view-caretakers/view-caretakers-details/${caretakerId}/book-appointment`);
  };


  let { caretakerId } = useParams();
  let caretaker = mockCaretakers.find(c => c.id === parseInt(caretakerId, 10));

  
  if (!caretaker) {
    return <div className="caretaker-not-found">Caretaker not found</div>;
  }

  return (
    <div className="caretaker-detail-card">
      <img src={caretaker.profilePic} alt={caretaker.name} className="caretaker-image" />
      <div className="caretaker-info">
        <h2 className="caretaker-name">{caretaker.name}</h2>
        <div className="caretaker-rating">
          {'⭐'.repeat(Math.round(caretaker.rating))} ({caretaker.reviews} reviews)
        </div>
        <p className="caretaker-bio">{caretaker.bio}</p>
        <div className="caretaker-rate">{caretaker.rate}</div>
        <button className="book-appointment-button" onClick={handleBookAppointmentClick}>
        Book Appointment
      </button>
      </div>
    </div>
  );
}

export default CaretakerDetailPage;