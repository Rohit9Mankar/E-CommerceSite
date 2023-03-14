import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import NavContext from '../../Store/NavContext';
import classes from './Navigation.module.css';
import Heading from './Heading';


const Navigation = () => {
    const navCtx = useContext(NavContext);
    const history = useHistory();

    const userLoggenIn = navCtx.isLoggenIn;

    const logoutClickHandler = () => {

        navCtx.logout();
        history.replace('/');
    }

    return (
        <div>

            <nav

                className={classes.navi}
            >
                <ul className={classes.list}>
                    {userLoggenIn && (<li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Home
                        </NavLink>
                    </li>)}
                    {userLoggenIn && (<li>
                        <NavLink
                            to="/store"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Store
                        </NavLink>
                    </li>)}
                    {userLoggenIn && (<li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            About
                        </NavLink>
                    </li>)}
                    {!userLoggenIn && (<li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Login
                        </NavLink>
                    </li>)}
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Contact us
                        </NavLink>
                    </li>
                    {userLoggenIn && (<li>
                        <button className={classes.Logout_action} onClick={logoutClickHandler}>Logout</button>
                    </li>)}
                </ul>


            </nav>

            <Heading></Heading>
        </div>
    );
}

export default Navigation;
