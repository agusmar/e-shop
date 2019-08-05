import React from 'react';
import Boton from "../Boton"
import './style.css';

class BuyBox extends React.Component {
  render() {
    return (

      <div className="buyBox-container">
        <div className="btn-wrapper">
          <Boton title="Comprar ahora"/>
          <Boton title="Agregar al carrito"/>
        </div>
        <div>
        Compra Protegida, recibí el producto que esperabas o te devolvemos tu dinero.
        </div>
        <div>
        Sumás 1 Mercado Punto.
        </div>
      </div>
    );
  }
}
export default BuyBox;