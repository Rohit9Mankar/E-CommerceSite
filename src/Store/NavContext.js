import React from "react";

const NavContext=React.createContext({
    items:[],
    addItems:()=>{},
  
    openCart: ()=>{},
    closeCart:()=>{},
})
export default NavContext;