import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Teu Nome. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Contactos</a>
          <a href="#">Baixar CV</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
