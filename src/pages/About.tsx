import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2>Hakkında</h2>
      <p>
        Tobeto Log Sistemi, kullanıcıların log verilerini izlemelerine, analiz etmelerine ve yönetmelerine yardımcı olan bir platformdur.
      </p>
      <p>
        Bizler, bilgi teknolojileri alanında uzmanlaşmış bir ekip tarafından geliştirilmiş bir yazılım şirketiyiz. Amacımız, müşterilerimize güvenilir, kullanıcı dostu ve etkili bir log yönetimi çözümü sunmaktır.
      </p>
      <p>
        Tobeto Log Sistemi hakkında daha fazla bilgi edinmek için bizimle iletişime geçebilirsiniz.
      </p>
    </div>
  );
};

export default About;
