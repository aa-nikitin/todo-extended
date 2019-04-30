import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import TodoItem from '../todo-item';

const ToDoList = ({ tasksList, completeTask, activeListId }) => {
    return (
        <ul className="todo-list">
            {tasksList.map(({ id, text, isCompleted }) => (
                <TodoItem
                    key={id}
                    text={text}
                    isCompleted={isCompleted}
                    id={id}
                    completeTask={completeTask}
                    activeListId={activeListId}
                />
            ))}
        </ul>
    );
};

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    completeTask: PropTypes.func,
    activeListId: PropTypes.number
};
ToDoList.defaultProps = {
    tasksList: [],
    completeTask: () => {},
    activeListId: 0
};

export default ToDoList;
