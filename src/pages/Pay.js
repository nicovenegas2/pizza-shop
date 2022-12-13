import React from "react";
import Direction from "../components/Direction";
import NavBar from "../components/NavBar";
import MethodPay from "../components/MethodPay";
import "../styles/Pay.css";

function Pay() {
    return (
        <div>
            <NavBar />
            <h1>Pay</h1>
            <div className="pay">
                <div className="pay-content"></div>
                <div className="pay-information">
                    <div className="pay-direction-box">
                        <Direction />
                    </div>
                    <div className="pay-method-box">
                        <MethodPay />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;