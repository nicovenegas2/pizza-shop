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
                        <div className="direction-input-box" >
                            <label htmlFor="address" className="direction-input-label">Detalles :</label>
                            <textarea type="text" name="address" id="address" className="direction-input-text details"  />
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

                    <div className="direction-input-box">
                        <label htmlFor="address" className="direction-input-label">Tienda </label>
                        <select name="address" id="address" className="direction-input-text">
                            <option value="1">Local 1</option>
                            <option value="2">Local 2</option>
                            <option value="3">Local 3</option>
                        </select>
                    </div>
                    
                    <div className="direction-input-box" >
                            <label htmlFor="address" className="direction-input-label">Detalles :</label>
                            <textarea type="text" name="address" id="address" className="direction-input-text details"  />
                        </div>

                </form>
            </Tab>
        </Tabs>
    );
}

export default Direction;