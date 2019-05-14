import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import TodoInput from '../../components/todo-input';
import {
    addTask,
    completeTask,
    delTask,
    changeFilter,
    sortTask
} from '../../actions';

import './style.css';

class ToDo extends Component {
    state = {
        taskName: ''
    };

    addTask = ({ key }) => {
        const { taskName } = this.state;
        const { addTask, activeListId } = this.props;

        if (taskName.length > 1 && (!key || key === 'Enter')) {
            addTask(new Date().getTime(), taskName, activeListId);
            this.setState({ taskName: '' });
        }
    };

    handleChangeTask = ({ target: { value } }) => {
        this.setState({ taskName: value });
    };

    activeList = (lists, id) => {
        const activeList = lists.filter(list => list.id === id)[0];
        if (activeList) {
            return activeList;
        } else if (lists[0]) {
            return lists[lists.length - 1];
        }
        return { tasks: [] };
    };

    getTotalActiveTasks = tasks => {
        return tasks.filter(task => !task.isCompleted).length;
    };

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            case 'complete':
                return tasks.filter(task => task.isCompleted);
            default:
                return tasks;
        }
    };

    moveTask = (dragIndex, hoverIndex) => {
        const { lists, activeListId, activeFilter, sortTask } = this.props;
        const activeList = this.activeList(lists, activeListId);
        const filteredTasks = this.filterTasks(activeList.tasks, activeFilter);

        sortTask(
            filteredTasks[dragIndex],
            filteredTasks[hoverIndex],
            activeListId
        );
    };

    render() {
        const {
            lists,
            activeListId,
            completeTask,
            delTask,
            activeFilter,
            changeFilter
        } = this.props;

        const activeList = this.activeList(lists, activeListId);
        const totalActiveTaskes = this.getTotalActiveTasks(activeList.tasks);
        const filteredTasks = this.filterTasks(activeList.tasks, activeFilter);

        return (
            <Fragment>
                {activeList.id && (
                    <div className="todo-wrapper">
                        <TodoInput
                            taskName={this.state.taskName}
                            addTask={this.addTask}
                            onChange={this.handleChangeTask}
                        />
                        <ToDoList
                            activeListId={activeListId}
                            tasksList={filteredTasks}
                            completeTask={completeTask}
                            delTask={delTask}
                            moveTask={this.moveTask}
                        />
                        <Footer
                            total={totalActiveTaskes}
                            activeFilter={activeFilter}
                            changeFilter={changeFilter}
                        />
                    </div>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = ({ lists, activeList, activeFilter }) => ({
    lists,
    activeListId: activeList,
    activeFilter
});

export default connect(
    mapStateToProps,
    { addTask, completeTask, delTask, changeFilter, sortTask }
)(ToDo);
