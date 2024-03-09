import React, { useState } from 'react';
//import { useParams } from 'react-router-dom';
import '../css/AdminOpenReviews.css'; // Ensure you have the corresponding CSS file

const CareTakerReviews = () => {
  //const { caretakerId } = useParams(); // This ID will be used to fetch related reviews

  // Mocked initial data
  const initialReviews = [
    { id: '1', owner: 'Dog Owner A', message: 'Hello, world! This is a toast message.' },
    { id: '2', owner: 'Dog Owner B', message: 'Hello, world! This is a toast message.' },
    // ... more reviews
  ];

  const [reviews, setReviews] = useState(initialReviews);

  const handleDelete = (reviewId) => {
    // In a real app, you would send a request to the backend to delete the review
    // Here we'll just filter it out from the local state
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(updatedReviews);
  };

  return (
    <div className="caretaker-reviews-container">
      {reviews.map(review => (
        <div key={review.id} className="review">
          <h3>{review.owner}</h3>
          <p>{review.message}</p>
          <button onClick={() => handleDelete(review.id)} className="delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CareTakerReviews;
