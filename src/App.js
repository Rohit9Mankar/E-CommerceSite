import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading';
import Products from './Components/StorePage/Products';
import Navigation from './Components/Navigation/Navigation';
import NavProvider from './Store/NavProvider';
import Footer from './Components/Footer';
import Cart from './Components/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const cartCloseHandler = (event) => {
    event.preventDefault();
    setShowCart(false);
  }

  return (
    <NavProvider>

      <Navigation onOpen={openCartHandler}></Navigation>
      {showCart && <Cart onClose={cartCloseHandler}></Cart>}
      <Heading></Heading>
      <Products></Products>

      <Footer></Footer>
    </NavProvider>

  );
}

export default App;
