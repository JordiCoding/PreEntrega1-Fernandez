// CardDetail.jsx
import React from 'react';
import './styles.css'; // Importa el archivo CSS de estilos

function CardDetail({ title, description, addToCart }) {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="button" onClick={addToCart}>Click me</button>
      </div>
    </div>
  );
}

export default CardDetail;


