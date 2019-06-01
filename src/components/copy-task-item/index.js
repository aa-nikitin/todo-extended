import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CopyTaskItem = ({ id, name, copyTasks, tasks, openModal }) => {
    return (
        <div
            className="copy-task-item"
            onClick={() => {
                copyTasks(id, tasks, new Date().getTime());
                openModal(false);
            }}
        >
            {name}
        </div>
    );
};

CopyTaskItem.propTypes = {
    copyTasks: PropTypes.func,
    openModal: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string,
    tasks: PropTypes.array
};

CopyTaskItem.exportDefault = {
    copyTasks: () => {},
    openModal: () => {},
    id: 0,
    name: '',
    tasks: []
};

export default CopyTaskItem;
