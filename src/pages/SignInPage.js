import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLogin from '../components/NavbarLogin';
import Footer from '../components/Footer';
import '../css/SignInPage.css'; // Make sure you have the corresponding CSS file

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Replace 'fakeUser' and 'fakePassword' with your fake credentials
    if (username === '1' && password === '1') {
      navigate('/admin'); // Redirect to AdminHomePage
    } else if(username === '2' && password === '2'){
      navigate('/user');
    }else {
      // Handle incorrect credentials
      alert('Incorrect username or password');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgotpassword'); // This should be the route to your forgot password page
  };


  return (
    <div className="signin-container">
      <NavbarLogin />
      <form onSubmit={handleLogin} className="signin-form">
        <div className="form-inner">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin-button">SIGN IN</button>
        </div>
        <div className="signin-footer">
          <button type="button" onClick={handleForgotPassword}>Forgot Password?</button>
          <button type="button" onClick={() => navigate('/sign-up')}>SIGN UP</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignInPage;
