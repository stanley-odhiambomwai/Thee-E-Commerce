import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">E-Commerce</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/products" className="mr-4">Products</Link>
        <Link to="/cart" className="mr-4">Cart</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;