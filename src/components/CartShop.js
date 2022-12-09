import React from "react";
import { Button } from "react-bootstrap";
import '../styles/CartShop.css'

function CartShop() {
    return (
        <div className="cart">
            <h3 id="title-cart">Carrito de compras</h3>
            <hr />
            <div id="content-cart">
            </div>
            <div className="total">
                <h4>Total: $0.00</h4>
                <Button id="pay-button" variant="primary">Proceder a pagar</Button>
            </div>
                 
        </div>
    );
}

export default CartShop;