import React from 'react';
import './Header.css';
import CartWidget from './CartWidget';

const Header = ({ cartCount }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <CartWidget cartCount={cartCount} /> {/* Pass cartCount as prop to CartWidget */}
    </header>
  );
};

export default Header;