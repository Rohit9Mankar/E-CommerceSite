import React from "react";
import MerchItem from "./MerchItem";

import classes from './MerchItem.module.css';

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

    

   

    const productsInStore = productsArr.map((item) => (
        <MerchItem
            key={item.id}
            quantity={item.quantity}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            
             />
    ))
    return (
        <div >
            <h2>Music</h2>
            <div className={classes.product_container}>
                {productsInStore}
            </div>

        </div>
    )
}
export default Products;