import React from 'react';
import Product from './Product';
export default function Main(props) {
  const { products, onAddCart } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddCart={onAddCart}
          ></Product>
        ))}
      </div>
    </main>
  );
}
