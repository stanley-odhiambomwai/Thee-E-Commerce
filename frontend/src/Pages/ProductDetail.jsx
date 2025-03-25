import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-green-500 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductDetails;