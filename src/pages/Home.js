import React from "react";
import Footer from "../components/Footer";
import Item from "../components/Item";
import NavBar from "../components/NavBar";
import '../styles/Home.css'

function Home() {

    const slides = [
        {url: "https://cdn.papajohns.cl/thumbnails/banners/sd_banner_web_1670245765_large.jpg", title: "Banner 1"},
    ];
    const promos = ["super duo", "campesina", "mechada bbq", "napolitana"];
    return (
        <div className="root">
            <NavBar />
            <div className="frameImage">
                <img className="banner" src={slides[0].url} alt={slides[0].title} />
            </div>
            <h2 className="proms-title">Promociones hechas para ti</h2>
            <div className="proms" id="prom">
                {promos.map((item) => (
                    <Item item={item} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;