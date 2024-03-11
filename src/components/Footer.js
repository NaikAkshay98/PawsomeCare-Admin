import React from 'react';
import '../css/footer.css';

function Footer() {
    return (
        <footer class="site-footer">
    <div class="footer-container">
        <div class="footer-nav">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="footer-social">
            <h3>Follow Us</h3>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
        </div>
        <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>Copyright &copy; 2024 Company Name. All Rights Reserved.</p>
    </div>
</footer>

    );
}

export default Footer;