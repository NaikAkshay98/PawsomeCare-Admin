import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/NavbarUser.css'; // Path to your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/user" className="nav-item" activeClassName="active">Pawsome Care</NavLink>
      <NavLink to="/user/view-caretakers" className="nav-item" activeClassName="active">View Caretakers</NavLink>
      <NavLink to="/user/events" className="nav-item" activeClassName="active">Events</NavLink>
      <NavLink to="/user/support" className="nav-item" activeClassName="active">Support</NavLink>
      <NavLink to="/user/view-appointments" className="nav-item" activeClassName="active">View Appointments</NavLink>
      <NavLink to="/user/profile" className="nav-item-right" activeClassName="active">Dog Owner A</NavLink>
      
    </nav>
  );
}

export default Navbar;