import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const FILTERS = [
    { id: 'all', name: 'Все' },
    { id: 'active', name: 'Актывные' },
    { id: 'complete', name: 'Выполненные' }
];

const Footer = ({ activeFilter, total, changeFilter }) => {
    return (
        <div className="footer">
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
    );
};

Footer.propTypes = {
    activeFilter: PropTypes.string,
    total: PropTypes.number,
    changeFilter: PropTypes.func
};
Footer.defaultProps = {
    activeFilter: '',
    total: 0,
    changeFilter: () => {}
};

export default Footer;
