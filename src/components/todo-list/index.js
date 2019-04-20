import React from 'react';
import './style.css';
import TodoItem from '../todo-item';

const ToDoList = ({ tasksList }) => {
    return (
        <ul className="todo-list">
            {tasksList.map(({ id, text, isCompleted }) => (
                <TodoItem
                    key={id}
                    text={text}
                    isCompleted={isCompleted}
                    id={id}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
