import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import NavContext from "../../Store/NavContext";



const Cart = (props) => {

    const navCtx=useContext(NavContext);

    const cartItems = navCtx.items.map((item) => (
        <CartItem
            key={item.id}
            
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            quantity={item.quantity} />
    ));

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
                    <ul>
                    {cartItems}
                    </ul>
                    
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