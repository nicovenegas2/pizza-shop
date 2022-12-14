import React from "react";
import '../styles/GridMenu.css'
import Item from "./Item";
import { getClasification } from "../images/data";

function GridMenu(args) {
    const name = args.name;
    console.log(name);
    const items = getClasification(name);
    return (
        <div className="gridMenu-menu" id={"menu-"+name}>
            <h2>{name}</h2>
            <div className="gridMenu-section">
                {items.map((item) => (
                    <Item item={item.name} />
                ))}
                <br />
            </div>
        </div>
    );
}

export default GridMenu;