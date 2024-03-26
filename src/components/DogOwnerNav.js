import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/Capture.png';
import '../assets/App.css'; 

function DogOwnerNav() {
  
  

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/DogOwnerHomePage" className="navbar-brand" activeClassName="active">
          <img src={logo} alt="Pawsome Care Logo" className="navbar-logo"/>
          <span className="navbar-text">Pawsome Care</span>
        </NavLink>
      </div>
      
      <NavLink to="/DogOwnerViewCaretakerPage" className="nav-item" activeClassName="active">View Caretakers</NavLink>
      <NavLink to="/DogOwnerEventPage" className="nav-item" activeClassName="active">Events</NavLink>
      <NavLink to="/DogOwnerSupportPage" className="nav-item" activeClassName="active">Support</NavLink>      
      <NavLink to="/DogOwnerBookAppointmentPage" className="nav-item" activeClassName="active">Book Appointments</NavLink>
      <NavLink to="/DogOwnerViewAppointmentPage" className="nav-item" activeClassName="active">View Appointments</NavLink>
      <NavLink to="/DogOwnerProfilePage" className="nav-item-right" activeClassName="active">Dog Owner A</NavLink>      
      
    </nav>
  );
}

export default DogOwnerNav;