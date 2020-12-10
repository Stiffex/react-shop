import React from 'react';

function Todo(props) {
    return (
        <div className={`todo ${props.todo.favourite ? "selected" : ""}`}>
            <div className="favourite">
                <button onClick={() => props.makeFavourite(props.index)}>&#9733;</button>
            </div>
            <div className="todo-text">
                {props.todo.text}
            </div>
            <div className="action">
                <button onClick={() => props.deleteTodo(props.index)}>&#10006;</button>
            </div>
        </div> 
    )
}

export default Todo;