import React from 'react';
import NavbarHome from '../components/NavbarHome'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed
import { Outlet } from 'react-router-dom';
import '../css/HomePage.css'; // Ensure you have a CSS file for styling the homepage

const HomePage = () => {
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

export default HomePage;
