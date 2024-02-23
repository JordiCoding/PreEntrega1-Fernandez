// CartWidget.jsx
import React from 'react';
import './Header.css'; // Importa el archivo de estilos CSS para el encabezado
import cartIcon from './assets/carts.png'; // Import the cart icon

const CartWidget = ({ cartCount }) => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart Icon" />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );        
};

export default CartWidget;