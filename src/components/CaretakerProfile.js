import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import '../assets/Caretaker.css'; 

const CaretakerProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    about: '',
    yearsOfExperience: '',
  });

  const history = useHistory(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfileImageChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated with:', profile);
  };

  const handleLogout = () => {
    history.push('/SignInPage'); 
  };

  const certificateApproved = true;
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
