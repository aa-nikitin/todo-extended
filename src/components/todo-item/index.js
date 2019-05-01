import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TodoItem = ({ text, isCompleted, completeTask, id, activeListId }) => {
    return (
        <li className="todo-item">
            <span className={`todo-item__left ${isCompleted ? 'active' : ''}`}>
                <i
                    className={`far todo-item__check
                        ${isCompleted ? 'fa-check-circle' : 'fa-circle'}
                    `}
                    onClick={() => completeTask(id, activeListId)}
                />
                <span
                    onClick={() => completeTask(id, activeListId)}
                    className={`todo-item__name`}
                >
                    {text}
                </span>
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

TodoItem.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    completeTask: PropTypes.func,
    activeListId: PropTypes.number
};
TodoItem.defaultProps = {
    text: '',
    id: 0,
    isCompleted: false,
    completeTask: () => {},
    activeListId: 0
};

export default TodoItem;
