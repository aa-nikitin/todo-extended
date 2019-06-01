import React from 'react';
import PropTypes from 'prop-types';

import CopyTaskItem from '../copy-task-item';

import './style.css';

const CopyTasks = ({ openModal, copyTasks, lists, tasks }) => {
    return (
        <div className="copy-tasks">
            {lists.map(list => {
                return (
                    <CopyTaskItem
                        key={list.id}
                        id={list.id}
                        name={list.name}
                        tasks={tasks}
                        copyTasks={copyTasks}
                        openModal={openModal}
                    />
                );
            })}
            <div className="copy-tasks__buttons">
                <button
                    className="copy-tasks__button button"
                    onClick={() => openModal(false)}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

CopyTasks.propTypes = {
    openModal: PropTypes.func,
    copyTasks: PropTypes.func,
    lists: PropTypes.array,
    tasks: PropTypes.array
};

CopyTasks.defaultProps = {
    openModal: () => {},
    copyTasks: () => {},
    lists: [],
    tasks: []
};

export default CopyTasks;
