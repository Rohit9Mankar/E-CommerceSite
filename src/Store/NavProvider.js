import React, { useState } from "react";
import NavContext from "./NavContext";

const NavProvider = (props) => {
    const toBeStoredToken=localStorage.getItem("token");
    
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [tokenId, setTokenId] = useState(toBeStoredToken);
  

    const userLoggedIn=!!tokenId;

    const loginUserHandler = (responseToken) => {
        setTokenId(responseToken);
       localStorage.setItem("token",responseToken);
       localStorage.setItem("timer","500000");
        console.log(responseToken);
        
    };

    const logoutUserHandler = () => {
        setTokenId(null);
        localStorage.removeItem("token");
    }

    const addCartItemHandler = (item) => {
        const aindex = cartItems.findIndex((elem) => {
            return elem.id === item.id;
        });
    
      
        const itemToBeAdded = cartItems[aindex];
       

        if(aindex) {
            const updatedItemOf={ ...itemToBeAdded, quantity: Number(itemToBeAdded.quantity) + 1 };

            setCartItems((prev) => {
                prev[aindex] = updatedItemOf;
                return [...prev];
            });
            setCartCount((prev)=> {return prev+1})
        }

        else {

            setCartItems((prev) => {

                return [...prev, item];
            });
            setCartCount((prev)=> {return prev+1});
            console.log(cartItems);
        }
    }


    const navContext = {
        items: cartItems,
        addItems: addCartItemHandler,
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