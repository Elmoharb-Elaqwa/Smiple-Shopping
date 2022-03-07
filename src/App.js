import './App.css';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItem, setCartItem] = useState([]);
  const onAddCart = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const onRemoveCart = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countAddCart={cartItem.length}></Header>
      <div className="row">
        <Main onAddCart={onAddCart} products={products}></Main>
        <Basket
          onAddCart={onAddCart}
          onRemoveCart={onRemoveCart}
          cartItem={cartItem}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
