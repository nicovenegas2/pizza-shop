import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import '../styles/Item.css'


function Item({item}) {

    function addCart() {
        const name = item.name;
        const price = item.price;
        let new_data = {};
        new_data[name] = price+ ',' + '1';
        let old_data = JSON.parse(localStorage.getItem('cart'));
        if (old_data === null) {
            localStorage.setItem('cart', JSON.stringify(new_data));
        } else {
            if (old_data[name] === undefined) {
                old_data[name] = price + ',' + '1';
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
                    <img className="img" src={item.image} alt={item.name} />
                    <div className="itemPriceAndClass">
                        <ListGroup horizontal>
                            <ListGroupItem className="class">{item.class}</ListGroupItem>
                            <ListGroupItem className="price">{new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(item.price)}</ListGroupItem>
                        </ListGroup>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className="itemList name">{item.name}</ListGroup.Item>
                <ListGroup.Item className="itemList desc">{item.description}</ListGroup.Item>
                <ListGroup.Item> 
                    <a href="#title-cart" onClick={addCart}><Button className="itemList buy" size="lg" >Comprar</Button></a>
                </ListGroup.Item>
            </ListGroup>
        </div>
        
    );
}

export default Item;