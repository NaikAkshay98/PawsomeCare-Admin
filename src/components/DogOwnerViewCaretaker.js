import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/DogOwner.css'; 

const mockCaretakers = [
  {
    id: 1,
    name: 'Nikita N.',
    rating: 4.5,
    reviews: 98,
    bio: 'Dedicated and experienced caretaker, committed to providing exceptional care...',
    rate: '$18/hr',
    profilePic: 'https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png' 
  },
  {
    id: 2,
    name: 'Nikita N.',
    rating: 4.5,
    reviews: 98,
    bio: 'Dedicated and experienced caretaker, committed to providing exceptional care...',
    rate: '$18/hr',
    profilePic: 'https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png' 
  },
  {
    id: 3,
    name: 'Nikita N.',
    rating: 4.5,
    reviews: 98,
    bio: 'Dedicated and experienced caretaker, committed to providing exceptional care...',
    rate: '$18/hr',
    profilePic: 'https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png' 
  }

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
            <Link to={`view-caretakers-details/${caretaker.id}`} className="read-more-button">
              Read More
            </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default ViewCaretakers;