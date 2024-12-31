import React from 'react';
import './ButtonContacto.css';

const ButtonContacto = () => {
  return (
    <button className="btnContacto" 
    onClick={() => document.getElementById('Contacto').scrollIntoView({ behavior: 'smooth' })}>
      Contacta Aquí.
    </button>
  );
};

export default ButtonContacto;
