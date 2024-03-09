import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>About us</p>
                <p>"Pawsome Care" is an innovative web platform dedicated to enhancing the lives of dog owners and their cherished pets. Founded by a team of pet enthusiasts, our mission is to provide a one-stop solution for all dog care needs, including grooming, walking, and veterinary services. With a focus on reliability, safety, and community, "Pawsome Care" connects dog owners with trusted caretakers, ensuring peace of mind and the highest standard of care for their furry friends. Join us in creating a happier, healthier world for dogs everywhere.</p>
                <div className="footer-links">
                    {/* Add navigation links */}
                </div>
                <div className="social-media-icons">
                    {/* Add social media icons */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
