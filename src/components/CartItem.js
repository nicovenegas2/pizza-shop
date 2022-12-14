import React from "react";
import { getInfo } from "../images/data";
import '../styles/CartItem.css'

function CartItem(prop) {
    // console.log(prop);
    const name = prop.name;
    const info = getInfo(name);
    const details = prop.details;
    const string = details.split(',');
    const price = string[0];
    const quantity = parseInt(string[1]);


    const changeQuantity = (e) => {
        let data = JSON.parse(localStorage.getItem('cart'));
        if (e === 0) {
            delete data[name];
        }else {
            data[name] = `${price},${e}`;
        }
        localStorage.setItem('cart', JSON.stringify(data));
}
    
    const minus = () => {
        if (quantity > 1) {
            changeQuantity(quantity - 1);
        }else {
            changeQuantity(0);
        }
    }

    const plus = () => {
        changeQuantity(quantity + 1);
    }

    return (
        <div className="item-container">
            <div className="item-cart">
                <div className="name-item-cart">
                    <span>{name}</span>
                </div>
                <span className="price-item-cart">${price}</span>
                <div className="quantity-item-cart">
                    <button className="btn-quantity-item-cart" onClick={minus}><p>-</p></button>
                    <span>{quantity}</span>
                    <button className="btn-quantity-item-cart" onClick={plus}><p>+</p></button>
                </div>
            </div>
            <hr />

        </div>
    );
}

export default CartItem;