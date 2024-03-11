import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavbarCT.css'; // Make sure this points to your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/caretaker" className="navbar-brand">Pawsome Care</Link>
      <div className="navbar-nav">
        <Link to="/caretaker/appointment-request" className="nav-link">Appointment Request</Link>
        <Link to="/caretaker/schedule" className="nav-link">Schedule</Link>
        <Link to="/caretaker/support" className="nav-link">Support</Link>
      </div>
      <div className="navbar-user">
        <Link to="/caretaker/profile" className="nav-link">Caretaker A</Link>
      </div>
    </nav>
  );
};

export default Navbar;
