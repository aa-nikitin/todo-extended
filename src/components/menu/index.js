import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item';
import './style.css';

const Menu = ({
    menuList,
    activeMenu,
    idActiveMenu,
    delList,
    activeListForEdit,
    moveList
}) => {
    return (
        <ul className="menu">
            {menuList.map(({ id, name }, i) => (
                <MenuItem
                    activeMenu={activeMenu}
                    key={id}
                    nameMenuItem={name}
                    id={id}
                    activeClass={idActiveMenu === id ? 'active' : ''}
                    delList={delList}
                    index={i}
                    activeListForEdit={activeListForEdit}
                    moveList={moveList}
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
    activeListForEdit: PropTypes.func,
    moveList: PropTypes.func
};

Menu.defaultProps = {
    menuList: [],
    activeMenu: () => {},
    idActiveMenu: 0,
    delList: () => {},
    activeListForEdit: () => {},
    moveList: () => {}
};

export default Menu;
