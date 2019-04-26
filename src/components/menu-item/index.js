import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MenuItem = ({ nameMenuItem, activeMenu, id, activeClass }) => {
    return (
        <li
            onClick={() => activeMenu(id)}
            className={`menu-item ${activeClass}`}
        >
            {nameMenuItem}
        </li>
    );
};

MenuItem.propTypes = {
    nameMenuItem: PropTypes.string,
    activeMenu: PropTypes.func,
    id: PropTypes.number,
    activeClass: PropTypes.string
};
MenuItem.defaultProps = {
    nameMenuItem: '',
    activeMenu: () => {},
    id: 0,
    activeClass: ''
};

export default MenuItem;
