import React from 'react';
import './ButtonMarcas.css';

const ButtonMarcas = () => {
  return (
    <button className="btnMarcas"
    onClick={() => document.getElementById('Marcas').scrollIntoView({ behavior: 'smooth' })}
    >
      Ver Marcas.
    </button>
  );
};

export default ButtonMarcas;