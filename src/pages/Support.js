import React, { useState } from 'react';
import '../css/Support.css'; // Make sure to create a SupportForm.css file for your styles

function SupportForm() {
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle the form submission
  };

  return (
    <div className="support-form-container">
      <form className="support-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <h3>Email Support</h3>  
          <label htmlFor="email">From</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Inquiry</label>
          <textarea
            id="inquiry"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">SEND</button>
      </form>
    </div>
  );
}

export default SupportForm;