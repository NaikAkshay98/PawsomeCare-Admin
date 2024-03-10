import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavbarHome.css'; // Make sure you have the corresponding CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Pawsome Care</Link>
      <div className="nav-items">
        <Link to="/caretakers" className="nav-item">View Caretakers</Link>
        <Link to="/events" className="nav-item">Events</Link>
        <Link to="/support" className="nav-item">Support</Link>
        <Link to="/appointments" className="nav-item">View Appointments</Link>
      </div>
      <div className="nav-actions">
        <Link to="/login" className="nav-action">SIGN IN/SIGN UP</Link>
      </div>
    </nav>
  );
};

export default Navbar;
