import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TodoDescr = ({ activeList }) => {
    return (
        <div className="todo-descr">
            {activeList.img && (
                <img
                    className="todo-descr__img"
                    alt={activeList.name}
                    src={activeList.img}
                />
            )}
            <div
                className="todo-descr__text"
                dangerouslySetInnerHTML={{
                    __html: activeList.descr
                }}
            />
        </div>
    );
};

TodoDescr.propTypes = {
    activeList: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        descr: PropTypes.string
    })
};
TodoDescr.defaultProps = {
    activeList: { name: '', img: '', descr: '' }
};

export default TodoDescr;
