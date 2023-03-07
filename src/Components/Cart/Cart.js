import React from "react";
import { Button } from "react-bootstrap";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const cartElements = [

    {
        id: "001",
        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {
        id: "002",
        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {
        id: "003",
        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

];

const Cart = (props) => {
    const cartItems = cartElements.map((item) => (
        <CartItem
            key={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity} />
    ))

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.cart}>
                <div>
                    <button onClick={props.onClose}>X</button>
                    <h2>Cart</h2>

                </div>
                <div className={classes.cartLabels}>
                    <h3>Item</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                </div>
                <div >
                    {cartItems}
                </div>
                <div className={classes.cartTotal}>
                    <h3>Total</h3>
                    <h3>0</h3>
                </div>
                
            </div>
            <Button style={{float:"inline-end"}}>Purchase</Button>
            
        </Modal>
    )
}
export default Cart;