import React from "react";
import CartShop from "../components/CartShop";
import GridMenu from "../components/GridMenu";
import NavBar from "../components/NavBar";
import '../styles/Menu.css'
import sliderNav from "../scripts/sliderNav";

function Menu() {
    const slides = [
        {url: "https://cdn.papajohns.cl/thumbnails/banners/sd_banner_web_1670245765_large.jpg", title: "Banner 1"},
        {url: "https://cdn.papajohns.cl/thumbnails/pizzas/greekfeta_1638284313_small.jpg", title: "Banner 2"},
        {url: "https://cdn.papajohns.cl/thumbnails/offers/sd_caluga_web_1670245051_small.jpg", title: "Banner 3"},
        {url: "https://cdn.papajohns.cl/thumbnails/offers/comborolls_1619191916_small.jpg", title: "Banner 3"},
        {url: "https://cdn.papajohns.cl/thumbnails/offers/bigcombo_1617820358_small.jpg", title: "Banner 3"},
    ];

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