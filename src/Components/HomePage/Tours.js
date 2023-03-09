import React from "react";
import TourItem from "./TourItem";
import classes from './Homepage.module.css';

const toursArray = [
    {
        id: "100",
        date: "JUL16",
        city: "DETROIT, MI",
        venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
        id: "101",
        date: "JUL19",
        city: "TORONTO,ON",
        venue: "BUDWEISER STAGE",
    },
    {
        id: "102",
        date: "JUL22",
        city: "BRISTOW, VA",
        venue: "JIGGY LUBE LIVE",
    },
    {
        id: "103",
        date: "JUL29",
        city: "PHOENIX, AZ",
        venue: "AK-CHIN PAVILION",
    },
    {
        id: "104",
        date: "AUG16",
        city: "LAS VEGAS, NV",
        venue: "T-MOBILE ARENA",
    },
    {
        id: "105",
        date: "AUG20",
        city: "CONCORD, CA",
        venue: "CONCORD PAVILION",
    },
];

const Tours = () => {

    const toursList = toursArray.map((item) => (
        <div style={{ padding: "0px" }}>
            <TourItem
                key={item.id}
                date={item.date}
                city={item.city}
                venue={item.venue} />
            <hr></hr>
        </div>



    ));

    return (
        <div className={classes.tour_List}>
            {toursList}
        </div>
    )
};


export default Tours;