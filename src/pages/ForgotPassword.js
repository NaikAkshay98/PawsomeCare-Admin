import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import '../css/ForgotPassword.css'; // Make sure to include your CSS file

function ForgotPassword() {
  const [email, setEmail] = useState('');
  //const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would send the email to your backend service
    console.log('Password reset email sent to:', email);
  };

  

  return (
    <div className="forgot-password-container">
      <h2>Forgot your password?</h2>
      <p>To reset your password, type the full email address you used to sign up for an e-mail to walk you through resetting your password.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="send-button">SEND</button>
      </form>
    </div>
  );
}

export default ForgotPassword;