import React, { useState } from 'react';
import '../assets/DogOwner.css';
import { useHistory } from 'react-router-dom';

function DogOwnerProfile({ onLogout }) {
  const [ownerProfile] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    about: 'Dog lover and enthusiast',
    dogs: [
      {
        name: 'Dog A',
        about: 'Loyal and playful'
      },
      {
        name: 'Dog B',
        about: 'Friendly and energetic'
      }
    ]
  });
  
  const history = useHistory();
  const handleLogout = () => {
    history.push('/SignInPage'); 
  };

  

  return (
    <div className="profile-page">
      
      <div className="profile-section">
        <label>Name:</label>
        <input type="text" value={ownerProfile.name} readOnly />
        
        <label>Email:</label>
        <input type="email" value={ownerProfile.email} readOnly />
        
        <label>Phone:</label>
        <input type="tel" value={ownerProfile.phone} readOnly />
        
        <label>About You:</label>
        <textarea value={ownerProfile.about} readOnly />
        
        <button className="update-button">Update</button>
      </div>
      
      <div className="dog-section">
      
        {ownerProfile.dogs.map((dog, index) => (
          <div key={index} className="dog-profile">
            <h3>{dog.name}</h3>
            <p>{dog.about}</p>
            {/* Additional dog details and edit button */}
          </div>
          
        ))}
        <button className="update-dog-details">Update Dog Details</button>
      </div>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default DogOwnerProfile;