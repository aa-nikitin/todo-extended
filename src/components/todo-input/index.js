import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const TodoInput = ({ taskName, addTask, onChange }) => {
    return (
        <div className="todo-input">
            <input
                onKeyPress={addTask}
                className="todo-input__field"
                placeholder="Введите задачу"
                value={taskName}
                onChange={onChange}
            />
            <i onClick={addTask} className="todo-input__add fas fa-plus" />
        </div>
    );
};

TodoInput.propTypes = {
    taskName: PropTypes.string,
    addTask: PropTypes.func,
    onChange: PropTypes.func
};

TodoInput.defaulProps = {
    taskName: '',
    addTask: () => {},
    onChange: () => {}
};

export default TodoInput;
