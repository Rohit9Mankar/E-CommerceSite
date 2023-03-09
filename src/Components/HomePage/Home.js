import React from "react";
import Footer from "../StorePage/Footer";
import Tours from "./Tours";

const Home = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "30px" }} >Tour</h2>
            <Tours />
            <Footer />
        </div>



    )
}

export default Home;