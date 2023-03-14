import React from "react";

const NavContext=React.createContext({
    items:[],
    addItems:()=>{},
    cartQuantity: 0,
    tokens: "",
    isLoggenIn: false,
    login: ()=>{},
    logout: ()=>{}
})
export default NavContext;