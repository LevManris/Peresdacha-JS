import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import StarRating from './StarRating';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [id]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Цена: ${product.price}</p>
          <StarRating rating={Math.round(product.rating.rate)} />
          <button onClick={goBack}>Назад</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
