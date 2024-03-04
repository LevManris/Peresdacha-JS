import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Список товаров</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
            <StarRating rating={Math.round(product.rating.rate)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
