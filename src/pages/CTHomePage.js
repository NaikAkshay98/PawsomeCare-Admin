import React from 'react';
import NavbarCT from '../components/NavbarCT'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed
import { Outlet } from 'react-router-dom';
import '../css/NavbarCT.css'; // Ensure you have a CSS file for styling the homepage

const UserHomePage = () => {
  return (
    <>
      <NavbarCT />
      <div className="admin-home-content">
        
        
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserHomePage;
