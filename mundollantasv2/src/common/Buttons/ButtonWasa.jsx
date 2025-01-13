import React from 'react';
import './ButtonMarcas.css';

const ButtonWasa = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "8186555059"; // Reemplaza con el número de teléfono al que quieres redirigir (sin el '+' inicial).
    const message = "Hola, Quiero llantas por mayoreo!"; // Mensaje predefinido, codificado en URI.
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button className="btnWasa" onClick={handleWhatsAppRedirect}>
      WHATSAPP
    </button>
  );
};

export default ButtonWasa;