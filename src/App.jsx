// App.jsx
import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import CardDetail from './Components/CardDetail'; 
import './Components/styles.css'; 
import cardsData from './data'; // Importa info de las cards

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <>
    <div className="header">La Fruteria</div>
      <NavBar cartCount={cartCount} />
      <div className="grid-container">
        {cardsData.map((card) => (
          <CardDetail key={card.id} title={card.title} description={card.description} price={card.price} image={card.image} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default App;