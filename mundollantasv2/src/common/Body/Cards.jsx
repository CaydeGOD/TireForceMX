import React from 'react';
import './Cards.css';
import image1 from './almacen.webp'; // Importa la imagen
import img2 from './Trailer1.webp';
import img3 from './Mecanico.jpg';
import img4 from './truck.jpg'
import ButtonContacto from '../Buttons/ButtonContacto'
import ButtonMarcas from '../Buttons/ButtonMarcas'
const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img src={image1} alt="Card 1" className="card-image" />
        <h5 className="card-title">AGILIDAD Y ACCESIBILIDAD</h5>
        <p><span className='card-description'>Proporcionamos una alta disponibilidad, ahorrando tiempo en entrega y un gran inventario a precios de mayoreo.</span></p>
      </div>
      <div className="card">
        <img src={img4} alt="Card 2" className="card-image" />
        <h5 className="card-title">COMPETENTES SIEMPRE</h5>
        <p>
        <span  className="card-description">Proveedores directos de fábrica. Satisfacemos las demandas del sector llantero, precios competitivos y un servicio de entrega ágil, puntual y efectiva.</span></p>
      </div>
      <div className="card">
        <img src={img2} alt="Card 3" className="card-image" />
        <h5 className="card-title">CUBRIMOS TUS NECESIDADES</h5>
        <p><span className="card-description">Desde llantas para carros y camionetas, hasta mayoreo de carga pesada como trailers y tractores.</span></p>
        <ButtonMarcas/>
      </div>
      <div className="card">
        <img src={img3} alt="Card 4" className="card-image" />
        <h5 className="card-title">TRATO PERSONALIZADO</h5>
        <p><span className="card-description">Tenemos atención vía telefónica, Whatsapp, Messenger, email e Instagram. Atención de Lunes a Viernes de 9 am. a 7 pm. y Sabado de 9 am a 5pm.</span></p>
        <ButtonContacto/>
      </div>
     
    </div>
  );
};

export default Cards;
