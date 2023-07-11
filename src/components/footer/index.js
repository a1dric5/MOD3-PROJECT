import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Footer Content */}
          <div className="footer-content">
            <nav className="footer-nav">
              <NavLink exact activeClassName='is-active' to="/ApplicationForm">Application Form</NavLink>
              <NavLink exact activeClassName='is-active' to="/SummerCamp">Summer Camp</NavLink>
              <NavLink exact activeClassName='is-active' to="/CareerAdvice">Career Advice</NavLink>
              <NavLink exact activeClassName='is-active' to="/About">About</NavLink>
              <NavLink exact activeClassName='is-active' to="/Contact">Contact</NavLink>
            </nav>
            <p>&copy; Path PLUS 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

