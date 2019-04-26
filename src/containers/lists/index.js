import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../components/menu';
import ToDo from '../../components/todo';
import { addList, activeMenu } from '../../actions';

import './style.css';

class Lists extends Component {
    state = {
        listName: ''
    };
    handleChange = ({ target: { value } }) => {
        this.setState({ listName: value });
    };
    addList = ({ key }) => {
        const { listName } = this.state;
        const { addList } = this.props;
        if (listName.length > 1 && (!key || key === 'Enter')) {
            addList(new Date().getTime(), listName);
            this.setState({ listName: '' } /*, () => console.log(this.props)*/);
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
        const { lists, activeMenu, activeListId } = this.props;
        const { listName } = this.state;
        const activeList = this.activeList(lists, activeListId);

        // if (activeList.id) console.log(activeList.name);
        return (
            <div className="list-wrapper">
                <Menu
                    menuList={lists}
                    onChange={this.handleChange}
                    listName={listName}
                    addList={this.addList}
                    activeMenu={activeMenu}
                    idActiveMenu={activeList.id}
                />
                {activeList.id && <ToDo tasksList={activeList.tasks} />}
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
    { addList, activeMenu }
)(Lists);
