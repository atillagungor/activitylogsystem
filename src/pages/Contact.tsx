import React from 'react';
import './Contaxt.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2>İletişim</h2>
      <p>Bize ulaşmak için aşağıdaki formu doldurabilirsiniz:</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Adınız:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta Adresiniz:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mesajınız:</label>
          <textarea id="message" name="message" rows={4} required></textarea>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Contact;