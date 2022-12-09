import React from "react";
import CartShop from "../components/CartShop";
import NavBar from "../components/NavBar";
import '../styles/Menu.css'

function Menu() {
    return (
        <div className="root">
            <NavBar />
            <br />
            <div className="grid-menu">
                <div >
                    <div id="banner-make-pizza" className="grid-box">
                        <a href="/"><div>Haz tu propia pizza</div></a>
                        <img src="https://www.cucinare.tv/wp-content/uploads/2020/10/Pizzas.jpg" alt="Pizza Hut" />
                    </div>
                    <div id="content-menu" className="grid-box">
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                        a
                        <hr />
                    </div>
                </div>
                <CartShop />
            </div>
        </div>
    );
}

export default Menu;