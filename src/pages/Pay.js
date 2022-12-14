import React from "react";
import Direction from "../components/Direction";
import NavBar from "../components/NavBar";
import MethodPay from "../components/MethodPay";
import "../styles/Pay.css";
import ResumePay from "../components/ResumePay";


function Pay() {
    const [total, setTotal] = React.useState(0);
    
    const getTotal = () => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        let newTotal = 0;
        Object.keys(cart).forEach((key) => {
            if (cart[key] !== undefined) {
                const string = cart[key].split(",");
                const price = parseInt(string[0]);
                const quantity = parseInt(string[1]);
                newTotal += price * quantity;
            }
        });
        if(newTotal === 0) {
            window.location.href = "/menu";
            window.localStorage.setItem("cart", JSON.stringify({}));
        }
        if (newTotal !== total)setTotal(newTotal);
    };
    
    React.useEffect(() => {
        setInterval(() => {
            getTotal();
        }, 200);
    }, [total]);
    
    
    return (
        <div>
            <NavBar />
            <br />
            <div className="pay">
                <div className="pay-content">
                    <ResumePay total={total}/>
                </div>
                <div className="pay-information">
                    <div className="pay-direction-box">
                        <Direction />
                    </div>
                    <div className="pay-method-box">
                        <MethodPay total={total}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;