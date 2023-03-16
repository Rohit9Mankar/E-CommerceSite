import React from "react";
import { Button } from "react-bootstrap";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";





const Cart = (props) => {

 


    const cartItems = props.cartArray.map((item) => (
        <CartItem
            key={item._id}
            
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity} />
    ));

  

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.cart}>
                <div className={classes.action_close}>
                    <button onClick={props.onClose}>X</button>
                    <h2>Cart</h2>

                </div>
                <div className={classes.cartLabels}>
                    <h3 style={{marginRight:"15px"}}>Item</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                </div>
                <div >
                    <ul>
                    {cartItems}
                    </ul>
                    
                </div>
                <div className={classes.cartTotal}>
                    <h3>Total</h3>
                    <h3>$ {props.cartPrice}</h3>
                </div>
                
            </div>
            <Button style={{float:"inline-end"}}>Purchase</Button>
            
        </Modal>
    )
}
export default Cart;