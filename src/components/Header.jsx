import React from 'react';
import './Header.css';
import logoIcon from '../assets/element-4.png';
import mainLogo from '../assets/Logo.png';
import searchIcon from '../assets/search-normal.png';
import heartIcon from '../assets/heart.png';
import profileIcon from '../assets/profile.png';
import bagIcon from '../assets/shopping-bag.png';
import arrowIcon from '../assets/arrow-left.png';

const Header = () => {
  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="top-message">🔔 Lorem ipsum dolor</div>
        <div className="top-message">🔔 Lorem ipsum dolor</div>
        <div className="top-message">🔔 Lorem ipsum dolor</div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-left">
          <img src={logoIcon} alt="Icon Logo" className="icon-logo" />
        </div>
        <div className="header-center">
          <img src={mainLogo} alt="Main Logo" className="main-logo" />
        </div>
        <div className="header-right">
          <img src={searchIcon} alt="Search" className="header-icon" />
          <img src={heartIcon} alt="Heart" className="header-icon" />
          <img src={profileIcon} alt="Profile" className="header-icon" />
          <img src={bagIcon} alt="Cart" className="header-icon" />
          <div className="lang-select">
            ENG <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
