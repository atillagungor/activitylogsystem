import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <div className="home-card">
          <h2 className="home-card-title">Tobeto Log Sistemi Denemesi 1</h2>
          <p className="home-card-text">Bu kısımda sistemle ilgili bir açıklama yapabilirsiniz.</p>
          <button className="home-card-button">Butona Tıkla</button>
        </div>
        <div className="home-card">
          <h2 className="home-card-title">Tobeto Log Sistemi Denemesi 2</h2>
          <p className="home-card-text">Bu kısımda sistemle ilgili bir açıklama yapabilirsiniz.</p>
          <button className="home-card-button">Butona Tıkla</button>
        </div>
      </div>
    </div>
  );
};

export default Home;