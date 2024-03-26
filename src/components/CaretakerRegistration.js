import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/Caretaker.css';
const CaretakerRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign up logic here')
    history.push('/create-profile'); 
  };

  return (
    <div>
      <div className="signup-form-container">
        <h2>Caretaker Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input 
            type="text" 
            placeholder="User Name" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default CaretakerRegistration;
