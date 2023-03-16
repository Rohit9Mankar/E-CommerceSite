import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import NavContext from "../../Store/NavContext";
import classes from './MerchItem.module.css';



const MerchItem = (props) => {
    const navCtx = useContext(NavContext);

    const addProductToCart = async (event) => {
        event.preventDefault();

        const newEmail = localStorage.getItem("email");
        const response = await fetch(`https://crudcrud.com/api/f6f4095d024c4c7394ffa2b66fde2454/cart${newEmail}`);
        if (!response.ok) {

            throw new Error('Something went Wrong, Retrying..');

        }
        const data = await response.json();
        console.log(data);

        const index = data.findIndex((ele) => ele.title == props.title);

        if (index >= 0) {
            const newId = data[index]._id;
            const updatedItem = { ...props, quantity: props.quantity + 1 };
            fetch(`https://crudcrud.com/api/f6f4095d024c4c7394ffa2b66fde2454/cart${newEmail}/${newId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItem)

            }).then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
              

        }
        else {
            fetch(`https://crudcrud.com/api/f6f4095d024c4c7394ffa2b66fde2454/cart${newEmail}`,
                {
                    method: 'POST',
                    body: JSON.stringify(props),
                    headers: {
                        'Content-Type': 'application/json'
                    }

                }
            ).then((res) => {
                if (res.ok) {
                    console.log(res.status)
                }
                else {
                    return res.json().then((data) => console.log(data))
                }
            })
        }
        navCtx.increaseCount();
    };
    return (
        <div className={classes.product}>
            <div className={classes.product_title}>
                <h3>{props.title}</h3>
            </div>

            <div>
                <img src={props.imageUrl} alt={props.title}></img>
            </div>
            <div className={classes.product_controls}>
                <div>$ {props.price}</div>
                <div className={classes.actions_add}>
                    <button onClick={addProductToCart}>Add to Cart</button>
                </div>
            </div>

            <Link className={classes.product_info} to="/store/productInfo">Details</Link>
        </div>
    )

};
export default MerchItem;