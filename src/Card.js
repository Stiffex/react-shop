import React from 'react';
import Button from "./Button";

function Card(props) {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={props.product.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.product.name}</div>
                <div>{props.product.rating}</div>
                <div className="card-price">{props.product.price}</div>
                <Button
                    setBought={props.setBought}
                    id={props.id}
                    bought={props.bought}
                />
            </div>
        </div>

    );
}

export default Card;