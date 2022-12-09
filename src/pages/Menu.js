import React from "react";
import NavBar from "../components/NavBar";
import '../styles/Menu.css'

function Menu() {
    return (
        <div className="root">
            <NavBar />
            <br />
            <div className="grid-menu">
                <div>
                    <div>a</div>
                    <div>c</div>
                </div>
                <div>b</div>
            </div>
        </div>
    );
}

export default Menu;