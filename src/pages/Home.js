import React from "react";
import Item from "../components/Item";
import NavBar from "../components/NavBar";
import '../styles/Home.css'

function Home() {

    const slides = [
        {url: "https://cdn.papajohns.cl/thumbnails/banners/sd_banner_web_1670245765_large.jpg", title: "Banner 1"},
        {url: "https://cdn.papajohns.cl/thumbnails/pizzas/greekfeta_1638284313_small.jpg", title: "Banner 2"},
        {url: "https://cdn.papajohns.cl/thumbnails/offers/sd_caluga_web_1670245051_small.jpg", title: "Banner 3"},
        {url: "https://cdn.papajohns.cl/thumbnails/offers/comborolls_1619191916_small.jpg", title: "Banner 3"},
        {url: "https://cdn.papajohns.cl/thumbnails/offers/bigcombo_1617820358_small.jpg", title: "Banner 3"},
    ];
    const proms =[
        {image: slides[2].url,name: "super duo",description: "Pizza de peperoni",price: "100000",class: "familiar"},
        {image: slides[1].url,name: "pizza supreme",description: "Pizza con extra queso, toques de peperoni para todos los gustos",price: "14500",class: "Indivudual"},
        {image: slides[3].url,name: "pizza supreme",description: "Pizza con extra queso, toques de peperoni para todos los gustos",price: "9990",class: "Familiar"},
        {image: slides[4].url,name: "pizza supreme",description: "Pizza con extra queso, toques de peperoni para todos los gustos",price: "9990",class: "Familiar"},
    ] 
    return (
        <div className="root">
            <NavBar />
            <div className="frameImage">
                <img className="banner" src={slides[0].url} alt={slides[0].title} />
            </div>
            <h2 className="proms-title">Promociones hechas para ti</h2>
            <div className="proms" id="prom">
                {proms.map((item) => (
                    <Item item={item} />
                ))}
            </div>
        </div>
    );
}

export default Home;