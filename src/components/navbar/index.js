import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiXCircle, FiAlignRight, FiChevronDown } from 'react-icons/fi';
import './index.css';

const Navbar = ({ setOpen }) => {
  const [navbar, setNavbar] = useState(false);
  const [responsiveclose, setResponsiveclose] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const toggleClass = () => {
    setNavbar(!navbar);
    setResponsiveclose(!responsiveclose);
  };

  let boxClass = ["main-navbar", "navbar-right", "navbar1"];
  if (navbar) {
    boxClass.push('navbar2');
  }

  const [navbar2, setnavbar2] = useState(false);

  const toggleSubmenu = () => {
    setnavbar2(!navbar2);
  };

  let boxClassSubMenu = ["sub__navbar"];
  if (navbar2) {
    boxClassSubMenu.push('sub__navbar__Active');
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">

          {/* Add Logo */}
          <div className="header__middle__logo">
            {/* Replace the below NavLink with your logo */}
            {/* <NavLink exact activeClassName='is-active' to="/">
              <img src={logo} alt="logo" />
            </NavLink> */}
          </div>

          <div className="header__middle__navbar">
            <nav className="main-nav">

              {/* Responsive Menu Button */}
              {responsiveclose ? (
                <span className="navbar__button" style={{ display: 'none' }} onClick={toggleClass}>
                  <FiXCircle />
                </span>
              ) : (
                <span className="navbar__button" style={{ display: 'none' }} onClick={toggleClass}>
                  <FiAlignRight />
                </span>
              )}

              <ul className={boxClass.join(' ')}>

                <li className="navbar-item">
                  <NavLink onClick={handleClick} activeClassName='is-active' to="/ApplicationForm"> Application Form </NavLink>
                </li>
                <li onClick={toggleSubmenu} className="navbar-item sub__navbar__arrows">
                  <Link to="#"> Service <FiChevronDown /> </Link>
                  <ul className={boxClassSubMenu.join(' ')}>
                    <li>
                      <NavLink onClick={toggleClass} activeClassName='is-active' to="/SummerCamp"> Summer Camp </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleClass} activeClassName='is-active' to="/CareerAdvice"> Career Advice </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="navbar-item">
                  <NavLink exact activeClassName='is-active' onClick={toggleClass} to="/"> About </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink onClick={toggleClass} activeClassName='is-active' to="/Contact"> Contact </NavLink>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
