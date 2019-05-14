import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TodoItem = React.forwardRef(
    (
        {
            text,
            isCompleted,
            completeTask,
            id,
            activeListId,
            delTask,
            isDragging,
            connectDragSource,
            connectDropTarget,
            sourceOffset
        },
        ref
    ) => {
        const elementRef = useRef(null);
        connectDragSource(elementRef);
        connectDropTarget(elementRef);
        useImperativeHandle(ref, () => ({
            getNode: () => elementRef.current
        }));
        const transform =
            isDragging && sourceOffset
                ? `translate(${0}px, ${sourceOffset.y -
                      elementRef.current.getBoundingClientRect().top}px)`
                : '';

        return (
            <li className="todo-item" ref={elementRef}>
                <span
                    style={Object.assign({}, { transform })}
                    className={`todo-item__left ${isCompleted ? 'active' : ''}`}
                >
                    <i
                        className={`far todo-item__check
                            ${isCompleted ? 'fa-check-circle' : 'fa-circle'}
                        `}
                        onClick={() => completeTask(id, activeListId)}
                    />
                    <span
                        onClick={() => completeTask(id, activeListId)}
                        className={`todo-item__name`}
                    >
                        {text}
                    </span>
                </span>
                <span className="todo-item__right">
                    <i
                        onClick={() => delTask(id, activeListId)}
                        className="far fa-times-circle todo-item__del"
                    />
                </span>
            </li>
        );
    }
);

TodoItem.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    completeTask: PropTypes.func,
    activeListId: PropTypes.number,
    delTask: PropTypes.func,
    isDragging: PropTypes.bool,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    sourceOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    })
};
TodoItem.defaultProps = {
    text: '',
    id: 0,
    isCompleted: false,
    completeTask: () => {},
    activeListId: 0,
    delTask: () => {},
    isDragging: false,
    connectDragSource: () => {},
    connectDropTarget: () => {},
    sourceOffset: { x: 0, y: 0 }
};

export default TodoItem;
