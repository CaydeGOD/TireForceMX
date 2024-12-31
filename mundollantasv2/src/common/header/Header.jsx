import React from 'react';
import './Header.css'; // Asegúrate de que este archivo CSS exista
import Head from './Head';
import Button from '../Buttons/Button.jsx';
import Cards from '../Body/Cards';
import CardsM from '../Body/CardsMarcas';
import ButtonFace from '../Buttons/ButtonFace.jsx';
import ButtonInsta from '../Buttons/ButtonInsta.jsx';
import ButtonWasa from '../Buttons/ButtonWasa.jsx';
const Header = () => {


  return (
    <>
     <div id='Inicio'></div>
      {/* Barra de navegación */}
      <Head/>
      {/* Imagen de fondo con efecto parallax */}
      <header
        className='main-header parallax1 loaded1' 
        >      
        <div className="header-content">
          <h1>BIENVENIDO A TIREFORCE MX</h1>
          <p className='almayoreo'>COMERCIALIZADORA DE LLANTAS AL MAYOREO</p>
          <Button/>
        </div>
      </header>
      {/* Sección adicional con contenido */}
      <div className="section">
        <h3>CONÓCENOS<div className='underline'></div></h3>
        <Cards/>
      </div>
       {/* Imagen de fondo con efecto parallax */}
       <header
        className='main-header parallax2 loaded2' 
        >      
        <div className="header-content">
          <h1>SI DE LLANTAS SE TRATA</h1>
          <p className='lastenemos'># N O S O T R O S  LAS  T E N E M O S</p>
          
        </div>
        
      </header>
      {/* Sección adicional con contenido */}
      
      <div className="section">
        <h3>LÍDERES EN MÉXICO<div className='underline'></div></h3>
        <p className='left'>
        Comprometidos con brindarte calidad, confianza y un servicio excepcional. Con años de experiencia en el mercado, entendemos la importancia de mantener tu negocio en movimiento.
        </p>
        <div className='Arial-1'>
        <p >Somos una empresa 100% mexicana. Enviamos llantas a todo el territorio nacional.</p>
        </div>
        <div className='Centro'>
          <div className='mexico-map'></div>
        </div>
      </div>
       {/* Imagen de fondo con efecto parallax */}
       <header id='Marcas'
        className='main-header parallax3 loaded3' 
        >      
        <div className="header-content">
          <h1>NUESTRAS MARCAS</h1>
          <p>ELIGE ENTRE LAS MEJORES OPCIONES</p>
        </div>
       
      </header>
      {/* MARCAS */}
      <div className="section" >
        <CardsM/>
        <div className='texto-gral'>
          <h1>Y MUCHAS MÁS</h1>
          <p className='Arial-1'>Pregunta por las marcas y medidas que necesitas:</p>
        </div>
      </div>
      {/* CONTACTO */}
      <div className="section Contacto" id='Contacto'>
        
        <div className='CBtn'>
        <h3>CONTACTO</h3>
        <p>
          ENVÍANOS TU COTIZACIÓN, PREGUNTAS Y MEDIDAS DE TU INTERÉS POR:
        </p>
        <ButtonFace/>
        <ButtonInsta/>
        <ButtonWasa/>
        <p>
          TEL: 773 2725 8368
         </p>
         <p>Correo: @outlook.com</p>
         <p className='Arial-1'>Ubicación:
            Del Carmelo 14, Zona Industrial, 56600 Chalco de Díaz Covarrubias, Méx.
         </p>
        </div>
       
      
       
      </div>
      
    </>
  );
};

export default Header;


