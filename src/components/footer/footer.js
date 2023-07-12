import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Footer Content */}
          <div className="footer-content">
            <nav className="footer-nav">
              <Link  to="/ApplicationForm">Application Form</Link>
              <Link  to="/SummerCamp">Summer Camp</Link>
              <Link  to="/CareerAdvice">Career Advice</Link>
              <Link  to="/About">About</Link>
              <Link  to="/Contact">Contact</Link>
            </nav>
            <p>&copy; Path PLUS 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

