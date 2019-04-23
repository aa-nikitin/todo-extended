import React, { Component } from 'react';
import './style.css';
import Menu from '../../components/menu';
import ToDo from '../todo';

const MENU = [
    {
        id: 1,
        name: 'пункт 1'
    },
    {
        id: 2,
        name: 'пункт 2'
    },
    {
        id: 3,
        name: 'пункт 3'
    }
];

class Lists extends Component {
    state = {
        listName: ''
    };
    handleChange = ({ target: { value } }) => {
        this.setState({ listName: value });
    };
    addList = ({ key }) => {
        const { listName } = this.state;
        if (listName.length > 1 && (!key || key === 'Enter')) {
            console.log(listName);
            this.setState({ listName: '' });
        }
    };
    render() {
        const { listName } = this.state;
        return (
            <div className="list-wrapper">
                <Menu
                    menuList={MENU}
                    onChange={this.handleChange}
                    listName={listName}
                    addList={this.addList}
                />
                <ToDo />
            </div>
        );
    }
}

export default Lists;
