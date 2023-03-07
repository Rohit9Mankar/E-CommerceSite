import React from "react";
import classes from './MerchItem.module.css';
import { Button } from "react-bootstrap";

const MerchItem = (props) => {
    return (
        <div className={classes.product}>
            <div>
                <h3>{props.title}</h3>
            </div>

            <div>
                <img src={props.imageUrl} alt={props.title}></img>
            </div>
            <div className={classes.product_controls}>
                <div>$ {props.price}</div>
                <div>
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </div>
    )

};
export default MerchItem;