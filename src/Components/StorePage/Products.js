import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";
import NavContext from "../../Store/NavContext";
import Cart from "../Cart/Cart";
import MerchItem from "./MerchItem";

import classes from './MerchItem.module.css';
import ProductInfo from "./ProductInfo";

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
    const [cartLoading, setCartLoading] = useState(false);
    const [cartItem, setCartItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const navCtx = useContext(NavContext);

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
        setCartLoading(true);
        const storedMail = localStorage.getItem("email");
        fetch(`https://crudcrud.com/api/f6f4095d024c4c7394ffa2b66fde2454/cart${storedMail}`)
            .then(async (response) => {
                if (response.ok) {

                    const data_1 = await response.json();
                    let price = 0;
                    data_1.forEach(element => {
                        price += Number(element.quantity) * Number(element.price);
                    });
                    setTotalPrice(price);
                    setCartItem(data_1);
                    setCartLoading(false);
                    setShowCart(true);
                    return console.log(data_1);

                }
                else {
                    const data_2 = await response.json();
                    return console.log(data_2);
                }
            })
    };

    const cartCloseHandler = (event) => {
        event.preventDefault();
        setShowCart(false);
    };

    return (

        <React.Fragment>

            <button
                onClick={openCartHandler}
                className={classes.action}>
                Cart {cartLoading ? "is Loading.." : navCtx.cartQuantity}
            </button>

            {showCart && <Cart cartPrice={totalPrice} cartArray={cartItem} onClose={cartCloseHandler} />}

           
            <div className={classes.product_container}>
            <h2 style={{ textAlign: "center", width:"100%" }}>Music</h2>
                {productsInStore}

            </div>
            <Route path='/store/productInfo'>
                <ProductInfo />
            </Route>

        </React.Fragment>


    )
}
export default Products;