import React from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css';



const CartModal = (props) => {

    return (

        <div className={classes.modal} onClick={props.onClose}>
            <div>{props.children}</div>
        </div>
    )
};
const Modal = (props) => {

    return (
        <React.Fragment>
            
            {ReactDOM.createPortal(<CartModal onClose={props.onClose}>{props.children}</CartModal>,
                document.getElementById("cart-modal"))}
        </React.Fragment>
    )
};
export default Modal;