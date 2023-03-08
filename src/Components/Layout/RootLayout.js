import { Outlet } from "react-router-dom";
import NavProvider from "../../Store/NavProvider";
import Navigation from "../Navigation/Navigation";


const RootLayout=()=>{
return (
    <>
    <NavProvider>
    <Navigation/>
    </NavProvider>
   
    <Outlet/>
    </>
)
}
export default RootLayout;