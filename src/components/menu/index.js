import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item';
import './style.css';

const Menu = ({
    menuList,
    activeMenu,
    idActiveMenu,
    delList,
    activeListForEdit
}) => {
    return (
        <ul className="menu">
            {menuList.map(({ id, name }) => (
                <MenuItem
                    activeMenu={activeMenu}
                    key={id}
                    nameMenuItem={name}
                    id={id}
                    activeClass={idActiveMenu === id ? 'active' : ''}
                    delList={delList}
                    activeListForEdit={activeListForEdit}
                />
            ))}
        </ul>
    );
};

Menu.propTypes = {
    menuList: PropTypes.array,
    activeMenu: PropTypes.func,
    idActiveMenu: PropTypes.number,
    delList: PropTypes.func,
    activeListForEdit: PropTypes.func
};

Menu.defaultProps = {
    menuList: [],
    activeMenu: () => {},
    idActiveMenu: 0,
    delList: () => {},
    activeListForEdit: () => {}
};

export default Menu;
