import React from "react";
import Navigation from "../Navigation/Navigation"
import Footer from "../StorePage/Footer";

const Layout=(props)=>{
    return (
      <React.Fragment>
        <Navigation/>
      <main>
        {props.children}
      </main>
      <Footer/>
      </React.Fragment>
    )
}
export default Layout;