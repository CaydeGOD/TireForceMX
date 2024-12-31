import React from 'react';
import './ButtonMarcas.css';

const ButtonInsta = () => {
  return (
    <button className="btnInsta"
    onClick={() => document.getElementById('Marcas').scrollIntoView({ behavior: 'smooth' })}
    >
      INSTAGRAM
    </button>
  );
};

export default ButtonInsta;