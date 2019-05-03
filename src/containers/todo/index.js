import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import TodoInput from '../../components/todo-input';
import { addTask, completeTask, delTask } from '../../actions';

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
        return {};
    };
    render() {
        const { lists, activeListId, completeTask, delTask } = this.props;

        const activeList = this.activeList(lists, activeListId);
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
                            tasksList={activeList.tasks}
                            completeTask={completeTask}
                            delTask={delTask}
                        />
                        <Footer activeFilter={'all'} />
                    </div>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists,
        activeListId: state.activeList
    };
};

export default connect(
    mapStateToProps,
    { addTask, completeTask, delTask }
)(ToDo);
