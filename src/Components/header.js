import React from 'react';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="logo">Teu Nome</div>
        <div className="social-buttons">
          <a href="#" className="social-button github">
            <img src="/github.svg" alt="github" />
          </a>
          <a href="#" className="social-button facebook">
            <img src="/facebook.svg" alt="face" />
          </a>
          <a href="#" className="social-button instagram">
            <img src="/instagram.svg" alt="insta" />
          </a>
        </div>
      </div>
    </nav>
  );
};
