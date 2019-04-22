import React from 'react';
import './style.css';

const TodoItem = ({ text, isCompleted }) => {
    return (
        <li className="todo-item">
            <span className="todo-item__left">
                <i
                    className={`far todo-item__check
                        ${isCompleted ? 'fa-check-circle' : 'fa-circle'}
                    `}
                />
                <span className="todo-item__name">{text}</span>
            </span>
            <span className="todo-item__right">
                <span className="todo-item__squares">
                    <i className="fas fa-caret-square-up todo-item__square-up" />
                    <i className="fas fa-caret-square-down todo-item__square-down" />
                </span>
                <i className="far fa-times-circle todo-item__del" />
            </span>
        </li>
    );
};

export default TodoItem;
