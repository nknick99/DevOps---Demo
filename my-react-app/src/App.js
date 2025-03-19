// Code Generated by Sidekick is for learning and experimentation purposes only.

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="App-header">
      <h1>My E-Commerce Site</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact ps</a></li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
  ];

  return (
    <main>
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; 2023 My E-Commerce Site</p>
    </footer>
  );
};

export default App;
