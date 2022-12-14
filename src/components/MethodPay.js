import React, { useEffect } from "react";

import { Tabs, Tab, Spinner } from "react-bootstrap";
import { redirect } from "react-router-dom";
import { sleep } from "../scripts/sleep";
import { Button } from "bootstrap";

import "../styles/MethodPay.css";




function MethodPay(prop) {

    const sleepTime = 2000;
    const [tip, setTip] = React.useState(0);
    const [buyCheck, setBuyCheck] = React.useState(false);
    const [waitBuy, setWaitBuy] = React.useState(false);

    const pay = async () => {
        console.log("Pago realizado");
        setWaitBuy(true);
        await sleep(sleepTime);
        setBuyCheck(true);
        await sleep(5000);
        goHome();
    };
    const updateTip = () => {
        const newTip = window.localStorage.getItem("tip");
        setTip(newTip);
    };

    const goHome = () => {
        window.localStorage.setItem("cart", JSON.stringify({}));
        window.location.href = "/";
    };

    const total = prop.total;
    const totalWithTip = (tip / 100 * total) + total;

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(cartList)
            updateTip();
            return () => clearInterval(interval);
        }, 200);
    }, [tip]);

    return (
        <>
            <Tabs
                defaultActiveKey="efectivo"
                id="tab-direction"
                className="mb-3"
                fill
            >
                <Tab eventKey="efectivo" title="efectivo">
                    <div className="direction-input-box">
                        <label htmlFor="email" className="direction-input-label">Email:</label>
                        <input type="text" name="email" id="email" className="direction-input-text" />
                    </div>
                    <div className="method-pay-box">
                        <button className="method-pay-button" onClick={pay}>Pagar {new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(totalWithTip)}
                            . En Efectivo</button>
                    </div>
                </Tab>
                <Tab eventKey="webpay" title="webpay">
                    <div className="direction-input-box">
                        <label htmlFor="email" className="direction-input-label">Email:</label>
                        <input type="text" name="email" id="email" className="direction-input-text" />
                    </div>
                    <div className="method-pay-box">
                        <button className="method-pay-button" onClick={pay}>Pagar {new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(totalWithTip)}
                            . con WebPay</button>
                    </div>
                </Tab>

            </Tabs>
            {waitBuy ? <div className="spinner-pay-box">
                <Spinner animation="border" role="status" id="spinner" />
            </div> : null}
            {buyCheck ?
                <div className="pay-feedback-box">
                    <div className="pay-feedback-content">
                        <p className="pay-feedback-text" id="pay-feedback-thanks">Gracias por su compra</p>
                        <p className="pay-feedback-text">Su pedido llegará en 30 minutos</p>
                        <p className="pay-feedback-text">Y en unos instantes le mandaremos su boleta por correo electronico</p>
                        <button id="pay-feedback-button" onClick={() => goHome()}>Volver a la pagina principal</button>
                    </div>
                </div> : null

            }
        </>

    );
}

export default MethodPay;