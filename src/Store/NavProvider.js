import React, { useState } from "react";
import NavContext from "./NavContext";

const NavProvider = (props) => {

    const [navClicked, setNavClicked] = useState("store");

   const navMenuUpdateHandler = (menu) => {
        setNavClicked(menu);
        if(navClicked==="store");
    }

    const navContext = {
        navMenu: navClicked,
        navMenuUpdate: navMenuUpdateHandler
    }
    return (
        <NavContext.Provider value={navContext}>
            {props.children}
        </NavContext.Provider>
    )

}
export default NavProvider;