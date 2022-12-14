import React from "react";
import CartShop from "../components/CartShop";
import GridMenu from "../components/GridMenu";
import NavBar from "../components/NavBar";
import '../styles/Menu.css'
import sliderNav from "../scripts/sliderNav";

function Menu() {
    
    React.useEffect(() => {
        sliderNav();
    }, []);
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
                        <nav id="menu-nav-sections">
                            <a href="#menu-pizzas">Pizzas</a>
                            <a href="#menu-bebidas">Bebidas</a>
                            <a href="#menu-variedad">Variedad</a>
                            <span className="menu-nav-sections-indicator" id="menu-nav-indicator"></span>
                        </nav>
                        <div className="menu-sections">
                            <GridMenu name="pizzas"/>
                            <GridMenu name="bebidas"/>
                            <GridMenu name="variedad"/>
                        </div>
                    </div>
                </div>
                <div ><CartShop /></div>
            </div>
        </div>
    );
}

export default Menu;