// App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from './Components/NavBar';
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
      <Header cartCount={cartCount} />
      <div className="grid-container">
        {cardsData.map((card) => (
          <CardDetail key={card.id} title={card.title} description={card.description} price={card.price} image={card.image} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default App;


>///////////////////////////////////////



import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

const Header = ({ cartCount }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/AboutPage">About</a></li> {/* Botón para navegar a About */}
        </ul>
      </nav>
      <CartWidget cartCount={cartCount} /> {/* Pass cartCount as prop to CartWidget */}
    </header>
  );
};

export default Header;



//////////////////////////


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


