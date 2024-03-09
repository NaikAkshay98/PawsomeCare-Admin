import React from 'react';
import '../css/NavbarLogin.css'; // This assumes you have a corresponding CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Pawsome Care
        </a>
        <div className="menu-icons">
          <i className="icon" /> {/* Replace with actual icons */}
          <i className="icon" /> {/* Replace with actual icons */}
          <i className="icon" /> {/* Replace with actual icons */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
