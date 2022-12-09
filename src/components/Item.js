import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import '../styles/Item.css'


function Item({item}) {
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
                    <a href="/buy"><Button className="itemList buy" size="lg" >Comprar</Button></a>
                </ListGroup.Item>
            </ListGroup>
        </div>
        
    );
}

export default Item;