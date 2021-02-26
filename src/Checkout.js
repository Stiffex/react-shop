import React from 'react';
import shoppingCard from './shopping-cart-solid.svg';

function Checkout(props) {

    const check = props.products.filter((product) => {
        return product.bought === true;
    })


    return (
        <div className='checkout'>
            <img src={shoppingCard} alt="card"/>
            <span className='counter'>{check.length}</span>
        </div>
    );
}

export default Checkout;