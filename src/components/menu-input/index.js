import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MenuInput = ({ onChange, listName, addList }) => {
    return (
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
    );
};

MenuInput.propTypes = {
    onChange: PropTypes.func,
    listName: PropTypes.string,
    addList: PropTypes.func
};

MenuInput.defaultProps = {
    onChange: () => {},
    listName: '',
    addList: () => {}
};

export default MenuInput;
