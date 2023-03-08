import React from "react";

const NavContext=React.createContext({
    items:[],
    addItems:()=>{},
   navMenu:"",
   navMenuUpdate:()=>{}
})
export default NavContext;