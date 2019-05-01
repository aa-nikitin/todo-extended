import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item';
import './style.css';

const Menu = ({ menuList, activeMenu, idActiveMenu }) => {
    return (
        <ul className="menu">
            {menuList.map(({ id, name }) => (
                <MenuItem
                    activeMenu={activeMenu}
                    key={id}
                    nameMenuItem={name}
                    id={id}
                    activeClass={idActiveMenu === id ? 'active' : ''}
                />
            ))}
        </ul>
    );
};

Menu.propTypes = {
    menuList: PropTypes.array,
    activeMenu: PropTypes.func,
    idActiveMenu: PropTypes.number
};

Menu.defaultProps = {
    menuList: [],
    activeMenu: () => {},
    idActiveMenu: 0
};

export default Menu;
