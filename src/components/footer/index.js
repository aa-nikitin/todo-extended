import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const FILTERS = [
    { id: 'all', name: 'Все' },
    { id: 'active', name: 'Актывные' },
    { id: 'complete', name: 'Выполненные' }
];

const Footer = ({
    activeFilter,
    total,
    changeFilter,
    completeTaskAll,
    activeListId,
    deleteTasksAll,
    openModal
}) => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__left">Задач: {total}</div>
                <div className="footer__right">
                    {FILTERS.map(({ id, name }) => {
                        return (
                            <button
                                className={`filter-button ${
                                    activeFilter === id ? 'active' : ''
                                }`}
                                key={id}
                                onClick={() => changeFilter(id)}
                            >
                                {name}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="footer__bottom">
                <button
                    onClick={() => completeTaskAll(activeListId, true)}
                    className="filter-button"
                >
                    Выделить
                </button>
                <button
                    className="filter-button"
                    onClick={() => completeTaskAll(activeListId, false)}
                >
                    Сбросить
                </button>
                <button
                    onClick={() => openModal(true)}
                    className="filter-button"
                >
                    Копировать
                </button>
                <button
                    onClick={() => deleteTasksAll(activeListId, activeFilter)}
                    className="filter-button"
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

Footer.propTypes = {
    activeFilter: PropTypes.string,
    total: PropTypes.number,
    activeListId: PropTypes.number,
    changeFilter: PropTypes.func,
    completeTaskAll: PropTypes.func,
    deleteTasksAll: PropTypes.func
    // openModal: PropTypes.func
};
Footer.defaultProps = {
    activeFilter: '',
    total: 0,
    activeListId: 0,
    changeFilter: () => {},
    completeTaskAll: () => {},
    deleteTasksAll: () => {}
    // openModal: () => {}
};

export default Footer;
