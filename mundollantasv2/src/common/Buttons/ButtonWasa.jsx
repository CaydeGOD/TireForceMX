import React from 'react';
import './ButtonMarcas.css';

const ButtonWasa = () => {
  return (
    <button className="btnWasa"
    onClick={() => document.getElementById('Marcas').scrollIntoView({ behavior: 'smooth' })}
    >
      WHATSAPP
    </button>
  );
};

export default ButtonWasa;