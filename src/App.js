import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Todos from './Todos';


function App(props) {

    const [todos, setTodos] = useState([
        {
            text: "Купить ноутбук",
            favourite: false,
        },
        {
            text: "Продать AirPods",
            favourite: false,
        },
        {
            text: "Отдать книгу обратно в библиотеку",
            favourite: false,
        },
        {
            text: "Сделать домашнее задание по программированию",
            favourite: false,
        },
        {
            text: "Посмотреть уроки по React",
            favourite: false,
        },
        {
            text: "Дочитать книгу Суперобучение",
            favourite: false,
        },
        {
            text: "Пойти в школу",
            favourite: false,
        },
        {
            text: "Узнать про вакансию в CDEK",
            favourite: false,
        },
        {
            text: "Посмотреть фильм",
            favourite: false,
        }
    ]);

    const [text, setText] = useState("");

    const deleteTodo = (indexOfElem) => {
        const filtred = todos.filter((todo, index) => {
            if(index === indexOfElem) {
                return false;
            };

            return true;
        });

        setTodos(filtred);
    }

    const makeFavourite = (imp) => {
        const newTodos = todos.map((item, index) => {
           if(imp === index) {
                return {
                    ...item,
                    favourite: !item.favourite,
                } 
           }

           return item;
        });

        setTodos(newTodos);
    };

    const addTodo = () => {
        setTodos([
        {
            text: text,
            favourite: false,
        }, 
        ...todos
        ]);

        setText("");
    }

    
    return (
        <div className="app">
            <Header />
            <Form text={text} setText={setText} addTodo={addTodo} />
            <Todos todos={todos} makeFavourite={makeFavourite} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;