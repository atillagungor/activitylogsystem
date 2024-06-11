import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import './Toastr.css';
import AuthService from '../../Services/AuthService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await AuthService.login({ email, password });
      console.log('Giriş başarılı:', response);
      toast.success('Giriş başarılı!', {
        className: 'custom-toast custom-toast-success',
      });
      navigate('/home');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error('Giriş hatası: Lütfen bilgilerinizi kontrol edin.', {
            className: 'custom-toast custom-toast-error',
          });
        } else if (error.request) {
          toast.warning('Sunucu hatası: Lütfen daha sonra tekrar deneyin.', {
            className: 'custom-toast custom-toast-warning',
          });
        } else {
          toast.error('Bilinmeyen hata.', {
            className: 'custom-toast custom-toast-error',
          });
        }
      } else {
        // Axios dışındaki hatalar için genel bir hata mesajı
        toast.error('Bir hata oluştu.', {
          className: 'custom-toast custom-toast-error',
        });
      }
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