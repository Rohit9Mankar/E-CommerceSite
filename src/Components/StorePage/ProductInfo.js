import React from "react";
import classes from './MerchItem.module.css';

const ProductInfo = () => {


    return (
        <div>
            <h3 style={{ padding: "10px", textAlign: "center" }}>All  Images</h3>
            <div className={classes.allImages}>
                <div className={classes.imgContain}>
                    <img src="/blueimg1.jpg" alt="pic1" />
                </div>
                <div className={classes.imgContain}>
                    <img src="/blueimg2.jpg" alt="pic2" />
                </div>
                <div className={classes.imgContain}>
                    <img src="/blueimg3.png" alt="pic3" />
                </div>
                <div className={classes.imgContain}>
                    <img src="/blueimg4.png" alt="pic4" />
                </div>
                <div className={classes.imgContain}>
                    <img src="/blueimg5.jpg" alt="pic5" />
                </div>

            </div>

            <h3 style={{ padding: "10px", textAlign: "center" }}>Reviews</h3>

            <div className={classes.reviews}>

                <div className={classes.review}>
                    <h6>Kapil Kumar vasale </h6>
                    <p>very nice sound quality। Sony is Sony । valuable product।।। amazing sound।। love to Sony </p>
                </div>
                <hr></hr>
                <div className={classes.review}>
                    <h6>Nehan Merchant </h6>
                    <p>nice product awesome bass sound quality supb. remote so cute thank you flip kart </p>
                </div>
                <hr></hr>
                <div className={classes.review}>
                    <h6>Pavan Kumar</h6>
                    <p>1. Bass is very powerful
                        2.sound clarity is also very good</p>
                </div>
                <hr></hr>
                <div className={classes.review}>
                    <h6>Dholi Kumar</h6>
                    <p>5 stars out of 5!</p>
                </div>
                <hr></hr>
            </div>
        </div>


    )
}
export default ProductInfo;