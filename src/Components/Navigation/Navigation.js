import React, { useContext } from 'react';
import NavContext from '../../Store/NavContext';
import { Button, Nav } from 'react-bootstrap';

function Navigation(props) {
    const navCtx = useContext(NavContext);
  

    const stateUpdateHandler = (menu) => {
        navCtx.navMenuUpdate(menu);
    }
    return (
        <div>
            <Nav
                defaultActiveKey="#store"
                className="justify-content-center"
            >
                <Nav.Item>
                    <Nav.Link href="#"
                        onClick={stateUpdateHandler.bind(null, "home")}>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#store"
                        onClick={stateUpdateHandler.bind(null, "store")}>
                        Store</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#"
                        onClick={stateUpdateHandler.bind(null, "about")}>
                        About</Nav.Link>
                </Nav.Item>
                <Button onClick={props.onOpen}>Cart {navCtx.cartQuantity}</Button>
            </Nav>
          

        </div>
    );
}

export default Navigation;
