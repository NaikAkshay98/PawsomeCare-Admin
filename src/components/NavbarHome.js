import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavbarHome.css'; // Make sure you have the corresponding CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Pawsome Care</Link>

      <Link to='/aboutuspage' key="Aboutus">AboutUs</Link>
      <Link to="/login" >SIGN IN/SIGN UP</Link>

      
    </nav>
  );
};

export default Navbar;
