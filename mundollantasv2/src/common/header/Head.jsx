import React, { useState } from 'react';
import './head.css'

const Head = () => {

   // Estado inicial del menú basado en el tamaño de la pantalla
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="head-container">
     
    <div className="container">   
      <div className="logo">
        
      </div>
      <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="fa-regular fa-square-caret-up icon-btn-hamburger"></i>
          ) : (
            <i className="fa-regular fa-square-caret-down icon-btn-hamburger"></i>
          )}
      </div>
      
      <nav  className="desktop-nav">
        <ul>
          <li><a href='#Inicio'>INICIO</a></li>
          <li><a href="#nosotros">NOSOTROS</a></li>
          <li><a href="#Marcas">MARCAS</a></li>
          <li><a href="#whatsapp">WHATSAPP</a></li>
          <li><a href="#Contacto">CONTACTO</a></li>
        </ul>
      </nav>
    </div>
    
    <nav  className={ `nav-links ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href='#Inicio'>INICIO</a></li>
          <li><a href="#nosotros">NOSOTROS</a></li>
          <li><a href="#Marcas">MARCAS</a></li>
          <li><a href="#whatsapp">WHATSAPP</a></li>
          <li><a href="#Contacto">CONTACTO</a></li>
        </ul>
      </nav>
  </div>
  )
}

export default Head