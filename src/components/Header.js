import React from 'react';

export default function Header(props) {
  const { countAddCart } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/">
          Cart{' '}
          {countAddCart ? (
            <button className="badge">{countAddCart}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/">Signin</a>
      </div>
    </header>
  );
}
