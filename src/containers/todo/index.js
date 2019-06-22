import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import TodoInput from '../../components/todo-input';
import TodoDescr from '../../components/todo-descr';
import ModalLists from '../../components/modal-lists';
import CopyTasks from '../../components/copy-tasks';
import {
    addTask,
    completeTask,
    delTask,
    changeFilter,
    sortTask,
    completeTaskAll,
    deleteTasksAll,
    copyTasks
} from '../../actions';

import './style.css';

class ToDo extends Component {
    state = {
        taskName: '',
        showModal: false
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

    openModal = show => {
        this.setState({ showModal: show });
    };

    render() {
        const {
            lists,
            activeListId,
            completeTask,
            delTask,
            activeFilter,
            changeFilter,
            completeTaskAll,
            deleteTasksAll,
            copyTasks
        } = this.props;
        const { showModal } = this.state;
        const activeList = this.activeList(lists, activeListId);
        const filteredTasks = this.filterTasks(activeList.tasks, activeFilter);
        const totalActiveTaskes = filteredTasks.length;

        return (
            activeListId && (
                <Fragment>
                    <div className="todo-wrapper">
                        <div className="todo-box">
                            <div className="todo">
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
                                    completeTaskAll={completeTaskAll}
                                    activeListId={activeListId}
                                    deleteTasksAll={deleteTasksAll}
                                    openModal={this.openModal}
                                />
                            </div>
                            <TodoDescr activeList={activeList} />
                        </div>
                    </div>
                    {showModal && (
                        <ModalLists>
                            <CopyTasks
                                openModal={this.openModal}
                                copyTasks={copyTasks}
                                tasks={filteredTasks}
                                lists={lists}
                            />
                        </ModalLists>
                    )}
                </Fragment>
            )
        );
    }
}

export { ToDo };

const mapStateToProps = ({ lists, activeList, activeFilter }) => ({
    lists,
    activeListId: activeList,
    activeFilter
});

export default connect(
    mapStateToProps,
    {
        addTask,
        completeTask,
        delTask,
        changeFilter,
        sortTask,
        completeTaskAll,
        deleteTasksAll,
        copyTasks
    }
)(ToDo);
