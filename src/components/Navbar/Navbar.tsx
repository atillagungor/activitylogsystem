import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/home" className="navbar-brand">Tobeto Log Sistemi</Link>
        <ul className="navbar-links">
          <li><Link to="/home">Ana Sayfa</Link></li>
          <li><Link to="/about">Hakkımda</Link></li>
          <li><Link to="/contact">İletişim</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
