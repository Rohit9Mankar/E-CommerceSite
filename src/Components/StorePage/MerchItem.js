import React,{ useContext } from "react";
import NavContext from "../../Store/NavContext";
import classes from './MerchItem.module.css';


const MerchItem = (props) => {
    const navCtx = useContext(NavContext);

    const addProductToCart = (event) => {
        event.preventDefault();
        navCtx.addItems(props);
    };
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
                    <button onClick={addProductToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )

};
export default MerchItem;