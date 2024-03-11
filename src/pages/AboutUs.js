import React from 'react';
import NavbarHome from '../components/NavbarHome'; // Adjust the import path as needed
import Footer from '../components/Footer'; // Adjust the import path as needed
import '../css/AboutUs.css';

// Import images
import member1Image from '../images/logo.jpeg';

const AboutUs = () => {

  return (
    <>
      <NavbarHome />
      <div className="about-us">
        <h1>About Pawsome Care</h1>
        <p>
        "Pawsome Care" is an innovative web platform dedicated to enhancing the lives of dog owners and their cherished pets. Founded by a team of pet enthusiasts, our mission is to provide a one-stop solution for all dog care needs, including grooming, walking, and veterinary services. With a focus on reliability, safety, and community, "Pawsome Care" connects dog owners with trusted caretakers, ensuring peace of mind and the highest standard of care for their furry friends. Join us in creating a happier, healthier world for dogs everywhere.
        </p>
        
        <section className="meet-the-team">
          <h2>Meet the Team Paw-Fect</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={member1Image} alt="Team Member 1" />
              <h3>Heer Patel</h3>
            </div>
            <div className="team-member">
              <img src={member1Image} alt="Team Member 2" />
              <h3>Heer Patel</h3>
            </div>
            <div className="team-member">
              <img src={member1Image} alt="Team Member 3" />
              <h3>Heer Patel</h3>
            </div>
            <div className="team-member">
              <img src={member1Image} alt="Team Member 4" />
              <h3>Heer Patel</h3>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
