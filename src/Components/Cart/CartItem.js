import React from "react";
import classes from './Cart.module.css';

const CartItem=(props)=>{
return(
    <div className={classes.cart_Item}>
        <h6> {props.title}</h6>
        <h6>{props.price}</h6>
        <h6> {props.quantity}</h6>
    </div>
)
}

export default CartItem;