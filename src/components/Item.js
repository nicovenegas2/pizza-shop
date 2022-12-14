import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import '../styles/Item.css'
import { getInfo } from "../images/data";
function Item({item}) {
    const info = getInfo(item);
    const image = info.image;
    const price = info.price;

    function addCart() {
        const name = item;
        const price = info.price;
        let new_data = {};
        new_data[name] = price+ ',1';
        let old_data = JSON.parse(localStorage.getItem('cart'));
        if (old_data === null) {
            localStorage.setItem('cart', JSON.stringify(new_data));
        } else {
            if (old_data[name] === undefined) {
                old_data[name] = price + ',1';
                localStorage.setItem('cart', JSON.stringify(old_data));
            } else {
                const old_price = old_data[name].split(',')[0];
                const old_quantity = old_data[name].split(',')[1];
                const new_quantity = parseInt(old_quantity) + 1;
                old_data[name] = old_price + ',' + new_quantity;
                localStorage.setItem('cart', JSON.stringify(old_data));
            }
        }
    }


    return (
        <div >
            <ListGroup variant="flush" className="item">
                <ListGroup.Item className="itemList">
                    <div className="itemImage"><img className="img" src={image} alt={item.name} /></div>
                    <div className="itemPriceAndClass">
                        <ListGroup horizontal>
                            <ListGroupItem className="class">{info.class}</ListGroupItem>
                            <ListGroupItem className="price">{new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(price)}</ListGroupItem>
                        </ListGroup>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className="itemList name">{info.name}</ListGroup.Item>
                <ListGroup.Item className="itemList desc">{info.description}</ListGroup.Item>
                <ListGroup.Item> 
                    <a href="#title-cart" onClick={addCart}><Button className="itemList buy" size="lg" >Comprar</Button></a>
                </ListGroup.Item>
            </ListGroup>
        </div>
        
    );
}

export default Item;