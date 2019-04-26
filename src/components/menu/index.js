import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item';
import './style.css';

const Menu = ({
    menuList,
    onChange,
    listName,
    addList,
    activeMenu,
    idActiveMenu
}) => {
    return (
        <div className="header">
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
            <div className="add-todo">
                <input
                    className="add-todo__field"
                    placeholder="Введите имя списка"
                    onChange={onChange}
                    value={listName}
                    onKeyPress={addList}
                />
                <div className="add-todo__button">
                    <i onClick={addList} className="fas fa-plus-circle" />
                </div>
            </div>
        </div>
    );
};

Menu.propTypes = {
    menuList: PropTypes.array,
    onChange: PropTypes.func,
    listName: PropTypes.string,
    addList: PropTypes.func,
    activeMenu: PropTypes.func,
    idActiveMenu: PropTypes.number
};

Menu.defaultProps = {
    menuList: [],
    onChange: () => {},
    listName: '',
    addList: () => {},
    activeMenu: () => {},
    idActiveMenu: 0
};

export default Menu;
