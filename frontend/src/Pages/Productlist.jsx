import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-10 grid grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product._id} className="border p-4">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p>{product.description}</p>
          <p className="text-green-500 font-bold">${product.price}</p>
          <Link to={`/products/${product._id}`} className="text-blue-500">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;