import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CTProfile.css'; // Make sure to write your CSS accordingly

const CaretakerProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
    yearsOfExperience: '',
  });

  const navigate = useNavigate(); 

  // You would also want state for storing the profile picture and certificate
  // For example:
  // const [profileImage, setProfileImage] = useState(null);
  // const [certificate, setCertificate] = useState(null);

  const handleInputChange = (e) => {
    

    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfileImageChange = (e) => {
    // Logic to handle profile image change
  };
/*
  const handleCertificateChange = (e) => {
    // Logic to handle certificate upload change
  };
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the updated profile data
    console.log('Profile updated with:', profile);
  };

  // Mocked certificate approval status
  const certificateApproved = true;

  
  const handleLogout = () => {
    // Add any logout logic here, e.g., clearing the local storage, redux state, etc.

    navigate('/login'); // Redirect user to login page
  };

  return (
    <div className="caretaker-profile-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="profileImage">Profile Image</label>
        <input type="file" id="profileImage" onChange={handleProfileImageChange} />
        <input type="text" name="name" value={profile.name} placeholder="Name" onChange={handleInputChange} />
        <input type="email" name="email" value={profile.email} placeholder="Email" onChange={handleInputChange} />
        <input type="tel" name="phone" value={profile.phone} placeholder="Phone" onChange={handleInputChange} />
        <textarea name="about" value={profile.about} placeholder="About you" onChange={handleInputChange} />
        <input type="text" name="yearsOfExperience" value={profile.yearsOfExperience} placeholder="Years of Experience" onChange={handleInputChange} />
        <button type="submit">Update</button>
      </form>
      {certificateApproved && (
        <div className="certificate-approved">
          <strong>Certificate Approved</strong>
          <ul>
            <li>Appointment Request enabled</li>
            <li>Schedule enabled</li>
            <li>Support enabled</li>
          </ul>
        </div>
      )}

        <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default CaretakerProfile;
