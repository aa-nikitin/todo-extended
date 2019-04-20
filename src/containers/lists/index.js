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
    render() {
        return (
            <div className="list-wrapper">
                <Menu menuList={MENU} />
                <ToDo />
            </div>
        );
    }
}

export default Lists;
