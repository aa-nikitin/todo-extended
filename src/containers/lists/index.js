import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../components/menu';
import MenuInput from '../../components/menu-input';
import { addList, activeMenu } from '../../actions';

import './style.css';

class Lists extends Component {
    state = {
        listName: ''
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
            this.setState({ listName: '' });
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

        return (
            <div className="header">
                <Menu
                    menuList={lists}
                    activeMenu={activeMenu}
                    idActiveMenu={activeList.id}
                />
                <MenuInput
                    onChange={this.handleChangeList}
                    listName={listName}
                    addList={this.addList}
                />
            </div>
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
    { addList, activeMenu }
)(Lists);
