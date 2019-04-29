import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import TodoInput from '../../components/todo-input';

const ToDo = ({ tasksList, taskName, addTask, onChangeTask }) => {
    // console.log(tasksList);
    return (
        <div className="todo-wrapper">
            <TodoInput
                taskName={taskName}
                addTask={addTask}
                onChange={onChangeTask}
            />
            <ToDoList tasksList={tasksList} />
            <Footer activeFilter={'all'} />
        </div>
    );
};

ToDo.propTypes = {
    tasksList: PropTypes.array,
    taskName: PropTypes.string,
    addTask: PropTypes.func,
    onChangeTask: PropTypes.func
};

ToDo.defaultProps = {
    tasksList: [],
    taskName: '',
    addTask: () => {},
    onChangeTask: () => {}
};

export default ToDo;
