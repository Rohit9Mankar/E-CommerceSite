import React, { useContext } from 'react';
import Products from './Components/StorePage/Products';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './Components/AboutPage/About';
import Home from './Components/HomePage/Home';

import Contact from './Components/ContactPage/Contact';
import ProductInfo from './Components/StorePage/ProductInfo';
import Layout from './Components/Layout/Layout';
import Login from './Components/LoginPage/Login';
import NavContext from './Store/NavContext';



function App() {
const navCtx=useContext(NavContext);

  return (

    <Layout>

      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        {navCtx.isLoggenIn && (<Route path="/store" >
          <Products />
        </Route>)}
        <Route path="/about">
          <About />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />

        </Route>
        <Route path="/productInfo" >
          <ProductInfo />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>



    </Layout>

  );
}

export default App;
