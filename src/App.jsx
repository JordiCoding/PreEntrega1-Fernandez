import React, { useState } from 'react';
import './App.css';
import CardDetail from './CardDetail';
import Card from './CardDetail';
import Header from './Header';
import './styles.css';
import CartWidget from './CartWidget';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const Card = () => {
    return (
      <div className="card-1">
        <img src="" />
        <div className="frame-4">
          <div className="frame-3">
            <p className="text-2">Summer Sunset</p>
            <p className="text-3">$60-93</p>
            <p className="text-4">FLORIST-TO-DOOR</p>
          </div>
          <button className="button">
            <p className="text-5">Ad to Cart</p>
          </button>
        </div>
      </div>
    )
  }

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const cards = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
    { title: 'Card 4', description: 'Description for Card 4' },
    { title: 'Card 5', description: 'Description for Card 5' },
    { title: 'Card 6', description: 'Description for Card 6' },
    { title: 'Card 7', description: 'Description for Card 7' },
    { title: 'Card 8', description: 'Description for Card 8' },
    { title: 'Card 9', description: 'Description for Card 9' }
  ];

  return (
    <>
      <Header cartCount={cartCount} /> {/* Pass cartCount as prop to Header */}
      <div className="grid-container">
        {cards.map((card, index) => (
          <CardDetail key={index} title={card.title} description={card.description} addToCart={addToCart} />
        ))}
      </div>

      <Card />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
