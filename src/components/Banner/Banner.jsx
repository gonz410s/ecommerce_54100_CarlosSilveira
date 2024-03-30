import React from 'react';
import logo from '../../assets/images/logo.png';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default Banner;