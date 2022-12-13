import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import "../styles/Direction.css";




function Direction() {
    return (
        <Tabs
            defaultActiveKey="delivery"
            id="tab-direction"
            className="mb-3"
            fill
        >
            <Tab eventKey="delivery" title="Delivery">
                <div className="direction-delivery">
                    <form method="Post">
                        <div className="direction-input-box">
                            <label htmlFor="name" className="direction-input-label">Nombre:</label>
                            <input type="text" name="name" id="name" className="direction-input-text" />
                        </div>
                        <div className="direction-input-box">
                            <label htmlFor="phone" className="direction-input-label">Teléfono:</label>
                            <input type="text" name="phone" id="phone" className="direction-input-text" />
                        </div>
                        <div className="direction-input-box">
                            <label htmlFor="address" className="direction-input-label">Dirección:</label>
                            <input type="text" name="address" id="address" className="direction-input-text" />
                        </div>
                        
                    </form>
                </div>
            </Tab>
            <Tab eventKey="local" title="Retiro en tienda">
                <form method="Post">
                    <div className="direction-input-box">
                        <label htmlFor="name" className="direction-input-label">Nombre:</label>
                        <input type="text" name="name" id="name" className="direction-input-text" />
                    </div>
                    <div className="direction-input-box">
                        <label htmlFor="phone" className="direction-input-label">Teléfono:</label>
                        <input type="text" name="phone" id="phone" className="direction-input-text" />
                    </div>
                </form>
            </Tab>
        </Tabs>
    );
}

export default Direction;