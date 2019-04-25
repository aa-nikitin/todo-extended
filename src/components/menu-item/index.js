import React from 'react';
import './style.css';

const MenuItem = ({ nameMenuItem, activeMenu, id }) => {
    return (
        <li onClick={() => activeMenu(id)} className="menu-item">
            {nameMenuItem}
        </li>
    );
};

export default MenuItem;
