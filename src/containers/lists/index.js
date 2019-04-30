import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../components/menu';
import ToDo from '../../components/todo';
import { addList, activeMenu, addTask, completeTask } from '../../actions';

import './style.css';

class Lists extends Component {
    state = {
        listName: '',
        taskName: ''
    };
    handleChangeList = ({ target: { value } }) => {
        this.setState({ listName: value });
    };
    addList = ({ key }) => {
        const { listName } = this.state;
        const { addList, activeMenu } = this.props;
        const newId = new Date().getTime();
        if (listName.length > 1 && (!key || key === 'Enter')) {
            addList(newId, listName);
            activeMenu(newId);
            this.setState({ listName: '' } /*, () => console.log(this.props)*/);
        }
    };
    handleChangeTask = ({ target: { value } }) => {
        this.setState({ taskName: value });
    };
    addTask = ({ key }) => {
        const { taskName } = this.state;
        const { addTask, activeListId } = this.props;

        if (taskName.length > 1 && (!key || key === 'Enter')) {
            addTask(new Date().getTime(), taskName, activeListId);
            this.setState({ taskName: '' });
        }
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
        const { lists, activeMenu, activeListId, completeTask } = this.props;

        const { listName, taskName } = this.state;
        const activeList = this.activeList(lists, activeListId);
        // if (activeList.id) console.log(activeList.name);
        return (
            <div className="list-wrapper">
                <Menu
                    menuList={lists}
                    onChange={this.handleChangeList}
                    listName={listName}
                    addList={this.addList}
                    activeMenu={activeMenu}
                    idActiveMenu={activeList.id}
                />
                {activeList.id && (
                    <ToDo
                        addTask={this.addTask}
                        activeListId={activeListId}
                        taskName={taskName}
                        tasksList={activeList.tasks}
                        completeTask={completeTask}
                        onChangeTask={this.handleChangeTask}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        lists: state.lists,
        activeListId: state.activeList
    };
};

export default connect(
    mapStateToProps,
    { addList, activeMenu, addTask, completeTask }
)(Lists);
