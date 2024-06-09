import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Tobeto Log Sistemi Denemesi</h5>
        <p className="card-text">Örnek olarak tıklanacak buton 1</p>
        <a href="#" className="btn btn-primary">Buraya Tıkla</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Tobeto Log Sistemi Denemesi</h5>
        <p className="card-text">Örnek olarak tıklanacak buton 2</p>
        <a href="#" className="btn btn-primary">Buraya Tıkla</a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;

