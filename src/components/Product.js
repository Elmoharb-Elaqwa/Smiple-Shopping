import React from 'react';

export default function Product(props) {
  const { product, onAddCart } = props;
  return (
    <div>
      <img className="imgSmall" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div className="price">${product.price}</div>
      <div className="btn">
        <button onClick={() => onAddCart(product)}> Add To Cart</button>
      </div>
    </div>
  );
}
