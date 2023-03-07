import React from "react";
import MerchItem from "./MerchItem";
import classes from './MerchItem.module.css';

const productsArr = [

    {
        id: "01",
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
        id: "02",
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
        id: "03",
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {
        id: "04",
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

];

const Products = () => {
    const productsInStore = productsArr.map((item) => (
        <MerchItem
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl} />
    ))
    return (
        <div className={classes.product_container}>
            <h2>Music</h2>
            {productsInStore}
        </div>
    )
}
export default Products;