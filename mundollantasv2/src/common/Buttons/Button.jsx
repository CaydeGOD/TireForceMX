import React from 'react';
import './Button.css';

const Button = () => {
  return (
    <button className="custom-button"
    onClick={() => document.getElementById('Contacto').scrollIntoView({ behavior: 'smooth' })}>
      COTIZA AHORA
    </button>
  );
};

export default Button;
