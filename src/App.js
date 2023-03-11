import React from 'react';
import Products from './Components/StorePage/Products';
import { Route,  Switch } from 'react-router-dom';
import About from './Components/AboutPage/About';
import Home from './Components/HomePage/Home';
import Navigation from './Components/Navigation/Navigation';
import NavProvider from './Store/NavProvider';
import Contact from './Components/ContactPage/Contact';
import ProductInfo from './Components/StorePage/ProductInfo';



function App() {


  return (

    <div>
      <NavProvider>
        <Navigation>

        </Navigation>
      </NavProvider>
      
        <Switch>
         
          <Route path="/home">
            <Home />
          </Route>
      
          <Route path="/store" exact>
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          
          </Route>
          <Route path="/store/product" >
              <ProductInfo />
            </Route>
        </Switch>

      

    </div>

  );
}

export default App;
