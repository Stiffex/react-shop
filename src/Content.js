import React from 'react';
import Card from "./Card";

function Content(props) {

    return (
        <div className='content'>
            {props.products.map((product) => {
                return (
                    <Card
                        product={product}
                        setBought={props.setBought}
                        id={product.id}
                        bought={product.bought}
                    />
                )
            })
            }
        </div>
    );
}

export default Content;