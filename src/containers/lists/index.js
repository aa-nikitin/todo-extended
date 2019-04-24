import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../components/menu';
import ToDo from '../todo';
import { addList } from '../../actions';

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
            this.setState({ listName: '' }, () => console.log(this.props));
        }
    };
    render() {
        const { lists } = this.props;
        const { listName } = this.state;
        return (
            <div className="list-wrapper">
                <Menu
                    menuList={lists}
                    onChange={this.handleChange}
                    listName={listName}
                    addList={this.addList}
                />
                <ToDo />
            </div>
        );
    }
}

const mapStateToProps = ({ lists }) => ({
    lists
});

export default connect(
    mapStateToProps,
    { addList }
)(Lists);
