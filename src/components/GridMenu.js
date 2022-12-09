import React from "react";
import '../styles/GridMenu.css'
import Item from "./Item";

function GridMenu(args) {
    const name = args.name;
    const items = args.items;
    return (
        <div className="gridMenu-menu" id={"menu-"+name}>
            <h2>{name}</h2>
            <div className="gridMenu-section">
                {items.map((item) => (
                    <Item item={item} />
                ))}
                <br />
            </div>
        </div>
    );
}

export default GridMenu;