import React from 'react';
import './ButtonMarcas.css';

const ButtonFace = () => {
  return (
    <button 
      className="btnMarcas" 
      onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=61572412552309'}
    >
      FACEBOOK
    </button>
  );
};

export default ButtonFace;
