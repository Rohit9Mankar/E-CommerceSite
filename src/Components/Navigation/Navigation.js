import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';
import Heading from './Heading';


const Navigation=()=>{

   
    return (
        <div>
            
            <nav
                
                className={classes.navi}
            >
                <ul className={classes.list}>
                <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/store"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Contact us
                        </NavLink>
                    </li>
                </ul>

                
            </nav>

            <Heading></Heading>
        </div>
    );
}

export default Navigation;
