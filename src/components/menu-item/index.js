import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MenuItem = ({
    nameMenuItem,
    activeMenu,
    id,
    activeClass,
    delList,
    activeListForEdit
}) => {
    return (
        <li className={`menu-item ${activeClass}`}>
            <span onClick={() => activeMenu(id)} className="menu-item__name">
                {nameMenuItem}
            </span>
            <span className="menu-item__options">
                <i
                    onClick={() => activeListForEdit(id)}
                    className="fas fa-pen-square menu-item__button"
                />
                <i
                    onClick={() => delList(id)}
                    className="fas fa-minus-square menu-item__button"
                />
            </span>
        </li>
    );
};

MenuItem.propTypes = {
    nameMenuItem: PropTypes.string,
    activeMenu: PropTypes.func,
    id: PropTypes.number,
    activeClass: PropTypes.string,
    activeListForEdit: PropTypes.func
};
MenuItem.defaultProps = {
    nameMenuItem: '',
    activeMenu: () => {},
    id: 0,
    activeClass: '',
    activeListForEdit: () => {}
};

export default MenuItem;
