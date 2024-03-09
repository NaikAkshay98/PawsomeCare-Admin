// AdminHome.js
import React from 'react';

import NavbarAdmin from '../components/NavbarAdmin'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed
import { Outlet } from 'react-router-dom';
import '../css/AdminHome.css'; // Your CSS file for this component

const AdminHome = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="admin-home-content">
        
        {/*<h1>Admin Dashboard</h1>*/}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AdminHome;
