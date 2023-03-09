import React from "react";
import { Button } from "react-bootstrap";
import classes from './Homepage.module.css';

const TourItem=(props)=>{
    return(
        
        <div className={classes.tour_Item}>
            <div>{props.date}</div>
            <div>{props.city}</div>
            <div>{props.venue}</div>
            <Button>BUY TICKETS</Button>
           
        </div>
    )
}
export default TourItem;