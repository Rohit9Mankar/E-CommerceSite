import React from 'react';
import Products from './Components/StorePage/Products';
import { Route } from 'react-router-dom';
import About from './Components/AboutPage/About';
import Home from './Components/HomePage/Home';
import Navigation from './Components/Navigation/Navigation';
import NavProvider from './Store/NavProvider';
import Contact from './Components/ContactPage/Contact';



function App() {


  return (

    <div>
      <NavProvider>
        <Navigation></Navigation>
      </NavProvider>
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store">
          <Products />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </main>

    </div>

  );
}

export default App;
