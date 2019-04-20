import React, { Component } from 'react';
import './style.css';
import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';

const TASKS = [
    { id: 1, text: 'task 1', isCompleted: false },
    { id: 2, text: 'task 2', isCompleted: false },
    { id: 13, text: 'task 3', isCompleted: false }
];

class ToDo extends Component {
    render() {
        return (
            <div className="todo-wrapper">
                <ToDoList tasksList={TASKS} />
                <Footer />
            </div>
        );
    }
}

export default ToDo;
