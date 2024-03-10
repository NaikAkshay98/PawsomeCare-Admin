import React from 'react';
import { Link } from 'react-router-dom';
import '../css/UserViewCareTaker.css'; // Make sure to create a ViewCaretakers.css file for your styles

const mockCaretakers = [
  {
    id: 1,
    name: 'Nikita N.',
    rating: 4.5,
    reviews: 98,
    bio: 'Dedicated and experienced caretaker, committed to providing exceptional care...',
    rate: '$18/hr',
    profilePic: '/path-to-images/caretaker1.jpg' // Replace with actual path to profile image
  },
  {
    id: 2,
    name: 'Nikita N.',
    rating: 4.5,
    reviews: 98,
    bio: 'Dedicated and experienced caretaker, committed to providing exceptional care...',
    rate: '$18/hr',
    profilePic: '/path-to-images/caretaker1.jpg' // Replace with actual path to profile image
  },
  {
    id: 3,
    name: 'Nikita N.',
    rating: 4.5,
    reviews: 98,
    bio: 'Dedicated and experienced caretaker, committed to providing exceptional care...',
    rate: '$18/hr',
    profilePic: '/path-to-images/caretaker1.jpg' // Replace with actual path to profile image
  }
  // ... other mock caretaker profiles
];

function ViewCaretakers() {
    return (
      <div className="caretaker-page">
        {mockCaretakers.map((caretaker) => (
          <div key={caretaker.id} className="caretaker-card">
            <img src={caretaker.profilePic} alt={caretaker.name} className="caretaker-image" />
            <h3>{caretaker.name}</h3>
            <div className="caretaker-rating">{`⭐ ${caretaker.rating} (${caretaker.reviews} reviews)`}</div>
            <p className="caretaker-bio">{caretaker.bio}</p>
            <div className="caretaker-rate">{caretaker.rate}</div>
            {/* Add this Link for "Read More" */}
            <Link to={`view-caretakers-details/${caretaker.id}`} className="read-more-button">
              Read More
            </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default ViewCaretakers;