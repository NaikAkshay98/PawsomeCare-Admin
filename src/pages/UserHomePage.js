import React from 'react';
import NavbarHome from '../components/NavbarUser'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed
import { Outlet } from 'react-router-dom';
import '../css/UserHomePage.css'; // Ensure you have a CSS file for styling the homepage

const UserHomePage = () => {
  return (
    <>
      <NavbarHome />
      <div className="admin-home-content">
        
        {/*<h1>Admin Dashboard</h1>*/}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserHomePage;
