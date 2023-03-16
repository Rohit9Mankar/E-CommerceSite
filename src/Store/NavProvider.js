import React, { useState } from "react";
import NavContext from "./NavContext";

const NavProvider = (props) => {
    const toBeStoredToken = localStorage.getItem("token");

   
    const [cartCount, setCartCount] = useState(0);
    const [tokenId, setTokenId] = useState(toBeStoredToken);


    const userLoggedIn = !!tokenId;

    const loginUserHandler = (responseToken, useremail) => {

        setTokenId(responseToken);
        localStorage.setItem("token", responseToken);

        const newMail = useremail.split("").filter((item) => {
            return (item !== "@" && item !== ".")
        }).join("");

        localStorage.setItem("email", newMail);
        console.log(responseToken);

        //setTimeout(()=>{
        //    logoutUserHandler();
        //},50000)

    };

    const logoutUserHandler = () => {
        setTokenId(null);
        localStorage.removeItem("token");
        localStorage.remove("email");
    }

    const increaseCountHandler = () => {
    setCartCount((prev)=>{return prev+1});
    };



    const navContext = {
        increaseCount:increaseCountHandler,
        cartQuantity: cartCount,
        tokens: tokenId,
        isLoggenIn: userLoggedIn,
        login: loginUserHandler,
        logout: logoutUserHandler


    };

    return (
        <NavContext.Provider value={navContext}>
            {props.children}
        </NavContext.Provider>
    )

}
export default NavProvider;