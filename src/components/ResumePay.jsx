import React from "react";
import CartItem from "./CartItem";

import "../styles/ResumePay.css";




function ResumePay({ total }) {

    if (localStorage.getItem("cart") === null) window.location.href = "/menu";


    const [cartList, setCart] = React.useState({});
    const [tip, setTip] = React.useState(0);

    function updateCart() {
        const newCart = JSON.parse(localStorage.getItem('cart'));
        setCart(newCart);
    }




    const cartItems = Object.keys(cartList).map((key) => {
        if (cartList[key] !== undefined) {
            return <CartItem name={key} details={cartList[key]} />
        } else {
            return null;
        }
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            // console.log(cartList)
            updateCart();
            return () => clearInterval(interval);
        }, 200);
    }, [cartList]);

    return (
        <div className="resume-pay">
            <div >
                {cartItems}
            </div>
            <div className="resume-pay-content-box">
                <p className="resume-pay-text">Propina</p>
                <input id="range-tip" type="range" min="0"
                 max="10"
                step="1"
                value={tip}
                 placeholder="10" onChange={(e) => {
                    setTip(e.target.value);
                    window.localStorage.setItem("tip", e.target.value);
                }} />
                <p className="resume-pay-text">Total + {tip}%</p>
                <p className="resume-pay-text">${
                    (tip / 100 * total) + total
                }</p>
            </div>
        </div>
    );
}

export default ResumePay;