import React from 'react';
import './style.css';

const TodoInput = () => {
    return (
        <div className="todo-input">
            <input className="todo-input__field" placeholder="Введите задачу" />
            <i className="todo-input__add fas fa-plus" />
        </div>
    );
};

export default TodoInput;
