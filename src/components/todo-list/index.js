import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import TodoItem from '../todo-item';

const ToDoList = ({
    tasksList,
    completeTask,
    activeListId,
    delTask,
    moveTask
}) => {
    return (
        <ul className="todo-list">
            {tasksList.map(({ id, text, isCompleted }, i) => (
                <TodoItem
                    key={id}
                    text={text}
                    isCompleted={isCompleted}
                    id={id}
                    completeTask={completeTask}
                    activeListId={activeListId}
                    delTask={delTask}
                    index={i}
                    moveTask={moveTask}
                />
            ))}
        </ul>
    );
};

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    completeTask: PropTypes.func,
    activeListId: PropTypes.number,
    delTask: PropTypes.func,
    moveTask: PropTypes.func
};
ToDoList.defaultProps = {
    tasksList: [],
    completeTask: () => {},
    activeListId: 0,
    delTask: () => {},
    moveTask: () => {}
};

export default ToDoList;
