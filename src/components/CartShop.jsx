import React from "react";
import { Button } from "react-bootstrap";
import CartItem from "./CartItem";
import '../styles/CartShop.css'

function CartShop() {

    const [cartList, setCart] = React.useState({});
    const [total, setTotal] = React.useState(0);

    function updateCart() {
        const newCart = JSON.parse(localStorage.getItem('cart'));
        let newTotal = 0;
        setCart(newCart);
        Object.keys(newCart).forEach((key) => {
            if (newCart[key] !== undefined) {
                const string = newCart[key].split(',');    
                const price = parseInt(string[0]);
                const quantity = parseInt(string[1]);
                newTotal += price * quantity;
            }
            setTotal(newTotal);
        });
        if (Object.keys(newCart).length === 0) {
            setTotal(0);
        }
    }
    
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            // console.log(cartList)
            updateCart();
            return () => clearInterval(interval);
        }, 200);
        },[cartList, total]);


    const cartItems = Object.keys(cartList).map((key) => {
        if (cartList[key] !== undefined) {
            return (
                <CartItem name={key} details={cartList[key]} />
            );
        } else {
            return null;
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
                <h4 id="total-pay">Total: {new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(total)}</h4>
                <a id="cart-pay-link" href="/pay"><Button id="cart-pay-button"  variant="primary">Proceder a pagar</Button></a>
            </div>
        </div>
    );
}

export default CartShop;