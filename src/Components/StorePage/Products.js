import React, { useContext,useState } from "react";
import NavProvider from "../../Store/NavProvider";
import NavContext from "../../Store/NavContext";
import Cart from "../Cart/Cart";
import Footer from "./Footer";
import MerchItem from "./MerchItem";

import classes from './MerchItem.module.css';
import { Button } from "react-bootstrap";

const productsArr = [

    {
        id: "01",
        title: 'Album 1',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 1,

    },

    {
        id: "02",
        title: 'Album 2',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 1,
    },

    {
        id: "03",
        title: 'Album 3',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    },

    {
        id: "04",
        title: 'Album 4',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity: 1,
    }

];

const Products = () => {
    const [showCart, setShowCart] = useState(false);

const navCtx=useContext(NavContext);

const productsInStore = productsArr.map((item) => (
        <MerchItem
            key={item.id}
            quantity={item.quantity}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}

        />
    ));

    const openCartHandler = (event) => {
        event.preventDefault();
        setShowCart(true);
      };
    
      const cartCloseHandler = (event) => {
        event.preventDefault();
        setShowCart(false);
      };

    return (
        <NavProvider>
            
            <Button onClick={openCartHandler} className={classes.action}>Cart {navCtx.cartQuantity}</Button>
           {showCart && <Cart onClose={cartCloseHandler}/>}
        
            <h2>Music</h2>
            <div className={classes.product_container}>
                {productsInStore}
            </div>
            <Footer/>
        </NavProvider>
    )
}
export default Products;