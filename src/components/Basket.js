import React from 'react';

export default function Basket(props) {
  const { cartItem, onAddCart, onRemoveCart } = props;
  const itemsPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);
  const taskPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taskPrice + shippingPrice;
  return (
    <aside className="col-1 block">
      <h2>Cart Items</h2>
      <div>
        {cartItem.length === 0 && (
          <div className="text-left">Cart Is Empty</div>
        )}
      </div>
      {cartItem.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2 text-left">{item.name}</div>
          <div className="col-2">
            <button className="add" onClick={() => onAddCart(item)}>
              +
            </button>
            <button className="remove" onClick={() => onRemoveCart(item)}>
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}
      {cartItem.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2 text-left">Items Price</div>
            <div className="col-1 text-right">${itemsPrice}</div>
          </div>
          <div className="row">
            <div className="col-2 text-left">Task Price</div>
            <div className="col-1 text-right">${taskPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2 text-left">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice}</div>
          </div>
          <div className="row">
            <div className="col-2 text-left">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice}</strong>
            </div>
          </div>
        </>
      )}
      <hr></hr>

      <div className="row btn">
        <button
          onClick={() => {
            alert('implement is checkout');
          }}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
}
