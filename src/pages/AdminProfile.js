// AdminProfile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AdminProfile.css'; // Make sure to create an AdminProfile.css file for styling

const AdminProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here, like clearing tokens or state

    // Redirect to the admin login page
    navigate('/adminlogin');
  };

  return (
    <div className="admin-profile-container">
      <h1>Admin Profile</h1>
      {/* You can add more profile details here */}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default AdminProfile;
