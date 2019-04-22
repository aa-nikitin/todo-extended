import React from 'react';
import './style.css';

const FILTERS = [
    { id: 'all', name: 'Все' },
    { id: 'active', name: 'Актывные' },
    { id: 'complete', name: 'Выполненные' }
];

const Footer = ({ activeFilter }) => {
    return (
        <div className="footer">
            <div className="footer__left">0 задач</div>
            <div className="footer__right">
                {FILTERS.map(({ id, name }) => {
                    return (
                        <button
                            className={`filter-button ${
                                activeFilter === id ? 'active' : ''
                            }`}
                            key={id}
                        >
                            {name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
