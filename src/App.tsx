import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './pages/Home';
import Register from './components/Register/Register';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navbar'ı burada render edin */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
