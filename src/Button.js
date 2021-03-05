import React from 'react';

function Button(props) {

    return (
        <div className='card-button'>
            <button className={props.bought ? "changeColour" : "btn"} onClick={()=>props.setBought(props.id)}>
                {props.bought === false ? "Добавить в корзину" : "Добавлено в корзину"}
            </button>
        </div>
    );
}

export default Button;

