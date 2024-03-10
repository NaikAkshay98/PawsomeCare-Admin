import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UserProfilePage.css'; // Make sure to create a DogOwnerProfile.css file for your styles

function DogOwnerProfile({ onLogout }){
  
  
  // Mock data for the dog owner's profile
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

  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login'); // Redirects to the Sign In page after logout
  };
  
  


  return (
    <div className="profile-page">
      <h2 className="profile-title">Profile</h2>
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