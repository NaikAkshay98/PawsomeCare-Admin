import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AdminReviews.css'; // Ensure you have the corresponding CSS file

const AdminReviews = () => {
  const [caretakers] = useState([
    { id: '558833', name: 'CT A' },
    { id: '558834', name: 'CT B' },
    // ... more caretakers
  ]);
  const navigate = useNavigate();

  const handleOpenReviews = (caretakerId) => {
    // Navigate to the reviews page for the selected CT
    navigate(`adminopenreviews/${caretakerId}`);
  };

  return (
    <div className="admin-reviews-container">
      <div className="search-container">
        <input type="text" placeholder="Search CareTaker Name or ID" />
        <button>Search</button>
      </div>
      <ul className="caretakers-list">
        {caretakers.map((caretaker) => (
          <li key={caretaker.id} className="caretaker">
            <span className="caretaker-id">CT id {caretaker.id}</span>
            <button
              onClick={() => handleOpenReviews(caretaker.id)}
              className="open-reviews-button"
            >
              Open Reviews
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminReviews;
