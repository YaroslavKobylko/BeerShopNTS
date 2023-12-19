import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BeerLogo } from './images';
import ContactModal from './ContactPage';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openContactModal = () => {
    setShowContactModal(true);
    setIsMenuOpen(false);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const handleLinkClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/home">
          <img src={BeerLogo} alt="Beer Catalog Logo" />
        </Link>
      </div>

      <div className="background">
        <button className="menu__icon" onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/home#topofpage" onClick={() => handleLinkClick('topofpage')}>
          Home
        </Link>
        <Link to="/home#products" onClick={() => handleLinkClick('products')}>
          Products
        </Link>
        <button onClick={openContactModal}>Contact us</button>
      </nav>

      {showContactModal && <ContactModal onClose={closeContactModal} />}
    </header>
  );
};

export default Header;