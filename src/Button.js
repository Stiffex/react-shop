import React from 'react';

function Button(props) {
    return (
        <div className='card-button'>
            <button className="btn" onClick={()=>props.setBought(props.id)} disabled={props.bought}>
                {props.bought === true ?"Добавлено в корзину" : "Добавить в корзину"}
            </button>
        </div>
    );
}

export default Button;