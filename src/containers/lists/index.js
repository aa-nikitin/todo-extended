import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Menu from '../../components/menu';
import MenuInput from '../../components/menu-input';
import {
    addList,
    activeMenu,
    delList,
    activeListForEdit,
    sortList
} from '../../actions';

import './style.css';

class Lists extends Component {
    state = {
        listName: '',
        showMenu: false
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
        const { activeMenu } = this.props;
        const activeList = lists.filter(list => list.id === id)[0];

        if (activeList) {
            return activeList;
        } else if (lists[0]) {
            const lastList = lists[lists.length - 1];

            activeMenu(lastList.id);
            return lastList;
        }

        return {};
    };

    delList = listId => {
        const { delList } = this.props;

        delList(listId);
    };

    changeShowMenu = () => {
        const { showMenu } = this.state;

        this.setState({ showMenu: !showMenu });
    };

    moveList = (dragIndex, hoverIndex) => {
        const { lists, sortList } = this.props;

        sortList(lists[dragIndex], lists[hoverIndex]);
    };

    render() {
        const {
            lists,
            activeMenu,
            activeListId,
            activeListForEdit
        } = this.props;
        const { listName, showMenu } = this.state;
        const activeList = this.activeList(lists, activeListId);
        const classShowMenu = showMenu ? 'active' : '';

        return (
            <Fragment>
                <div className={`header ${classShowMenu}`}>
                    <MenuInput
                        onChange={this.handleChangeList}
                        listName={listName}
                        addList={this.addList}
                    />
                    <Menu
                        menuList={lists}
                        activeMenu={activeMenu}
                        idActiveMenu={activeList.id}
                        delList={this.delList}
                        classShowMenu={classShowMenu}
                        activeListForEdit={activeListForEdit}
                        moveList={this.moveList}
                    />
                </div>
                <div
                    onClick={this.changeShowMenu}
                    className={`mobile-menu ${classShowMenu}`}
                    id="mobile-menu-button"
                >
                    <div className="mobile-menu__icon" />
                </div>
            </Fragment>
        );
    }
}

export { Lists };

const mapStateToProps = state => {
    return {
        lists: state.lists,
        activeListId: state.activeList
    };
};

export default connect(
    mapStateToProps,
    { addList, activeMenu, delList, activeListForEdit, sortList }
)(Lists);
