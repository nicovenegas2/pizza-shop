import React from "react";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";
import '../styles/CartShop.css'

function CartShop() {

    const [cartList, setCart] = React.useState({});

    function updateCart() {
        const newCart = JSON.parse(localStorage.getItem('cart'));
        setCart(newCart);
    }
    
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            // console.log(cartList)
            updateCart();
        }, 200);
        },[cartList]);


    const cartItems = Object.keys(cartList).map((key) => {
        if (cartList[key] !== undefined) {
            return (
                <CartItem name={key} details={cartList[key]} />
            );
        }
    });

    return (
        <div className="cart" id="shoppingCart">
            <h3 id="title-cart">Carrito de compras</h3>
            <hr />
            <div id="content-cart">
                {/* for using key and value in cartlist */}
                {cartItems}
            </div>
            <div className="total">
                <h4 id="total-pay">Total: $0.00</h4>
                <Button id="pay-button" variant="primary">Proceder a pagar</Button>
            </div>
                 
        </div>
    );
}

export default CartShop;