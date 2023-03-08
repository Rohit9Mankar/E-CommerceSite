import React, { useState } from "react";
import NavContext from "./NavContext";

const NavProvider = (props) => {

    const [cartShow, setCartShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);

    const openCartHandler=()=>{
        setCartShow(true);
    };

    const closeCartHandler=()=>{
     
        setCartShow(false);
    }
   

    const addCartItemHandler = (item) => {
        const aindex = cartItems.findIndex((elem) => {
            return elem.id === item.id;
        });
    
      
        const itemToBeAdded = cartItems[aindex];
       

        if(aindex>=0) {
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
        cartDisplay: cartShow,
        openCart: openCartHandler,
        closeCart: closeCartHandler,
       
    };

    return (
        <NavContext.Provider value={navContext}>
            {props.children}
        </NavContext.Provider>
    )

}
export default NavProvider;