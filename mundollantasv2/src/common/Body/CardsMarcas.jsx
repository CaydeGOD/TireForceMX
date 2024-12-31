import React from 'react';
import './CardsMarcas.css';
import brid from './Marcas/brid.png'; // Importa la imagen
import broad from './Marcas/broadpeak.jpg';
import conti from './Marcas/cont.jpg';
import doublecoin from './Marcas/doublecoin.jpg'
import fire from './Marcas/fire.jpg'
import good from './Marcas/goodyear.jpg'
import kumo from './Marcas/kumotire.jpg'
import long from './Marcas/Longtrack.jpg'
import max from './Marcas/max.jpg'
import miche from './Marcas/Michellin.jpg'
import power from './Marcas/powetrack.jpg'
import sumax from './Marcas/sumaxx.jpg'
import sunfull from './Marcas/sunfull.jpg'
import yoko from './Marcas/yoko.jpg'
import hank from './Marcas/hank.jpg'

const CardsM = () => {
  return (
    <div className="cards-containerM">

      <div className="cardM">
        <img src={good} alt="Card 1" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={long} alt="Card 2" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={conti} alt="Card 3" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={doublecoin} alt="Card 4" className="card-imageM" />
      </div>
     
      <div className="cardM">
        <img src={fire} alt="Card 1" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={sunfull} alt="Card 2" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={broad} alt="Card 3" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={miche} alt="Card 4" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={brid} alt="Card 2" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={yoko} alt="Card 3" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={power} alt="Card 4" className="card-imageM" />
      </div>
     
      <div className="cardM">
        <img src={sumax} alt="Card 1" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={hank} alt="Card 2" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={max} alt="Card 3" className="card-imageM" />
      </div>

      <div className="cardM">
        <img src={kumo} alt="Card 4" className="card-imageM" />
      </div>
    </div>
  );
};

export default CardsM;
