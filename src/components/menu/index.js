import React from 'react';
import MenuItem from '../menu-item';
import './style.css';

const Menu = ({ menuList }) => {
    return (
        <div className="header">
            <ul className="menu">
                {menuList.map(({ id, name }) => (
                    <MenuItem key={id} nameMenuItem={name} />
                ))}
            </ul>
            <div className="add-todo">
                <i className="fas fa-plus-circle" />
            </div>
        </div>
    );
};

export default Menu;
