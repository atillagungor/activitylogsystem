import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from '../../Services/AuthService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await AuthService.login({ email, password });
      if (response.status === 200) {
        console.log('Giriş başarılı:', response.data);
        navigate('/home');
      }
    } catch (error) {
      toast.error('Giriş hatası: Lütfen bilgilerinizi kontrol edin.');
      console.error('Giriş hatası:', error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Tobeto Log Giriş</h2>
        <div className="form-group">
          <label htmlFor="text">Email:</label>
          <input
            type="text"
            id="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your mail"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={handleRegisterRedirect}>
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
