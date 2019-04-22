import React, { Component } from 'react';
import './style.css';
import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import TodoInput from '../../components/todo-input';

const TASKS = [
    { id: 1, text: 'Task 1', isCompleted: false },
    { id: 2, text: 'Task 2', isCompleted: true },
    { id: 13, text: 'task 3', isCompleted: false }
];

class ToDo extends Component {
    render() {
        return (
            <div className="todo-wrapper">
                <TodoInput />
                <ToDoList tasksList={TASKS} />
                <Footer activeFilter={'all'} />
            </div>
        );
    }
}

export default ToDo;
