import React from 'react';
import './ButtonMarcas.css';

const ButtonFace = () => {
  return (
    <button className="btnMarcas"
    onClick={() => document.getElementById('Marcas').scrollIntoView({ behavior: 'smooth' })}
    >
      FACEBOOK
    </button>
  );
};

export default ButtonFace;