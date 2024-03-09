import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavbarAdmin.css'; // This will be your CSS file for styling

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul className="admin-nav-menu">
        <li className="admin-nav-item">
          <Link to="/admin/adminmanageusers" className="admin-nav-link">Users</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/admin/adminreviews" className="admin-nav-link">Reviews</Link>
        </li>
        <li className="admin-nav-item">
        <Link to="/admin/adminverifyCT" className="admin-nav-link">Verify CT</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/admin/admineventsdetails" className="admin-nav-link">Event Details</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/admin/adminemailsupport" className="admin-nav-link">Email Support</Link>
        </li>
        <li className="admin-nav-item">
          <Link to="/admin/adminprofile" className="admin-nav-link">Admin</Link> {/* Update this line */}
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
