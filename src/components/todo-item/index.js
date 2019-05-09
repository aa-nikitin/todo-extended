import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
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
            connectDropTarget
        },
        ref
    ) => {
        const elementRef = useRef(null);
        connectDragSource(elementRef);
        connectDropTarget(elementRef);
        const opacity = isDragging ? 0 : 1;
        useImperativeHandle(ref, () => ({
            getNode: () => elementRef.current
        }));
        return (
            <li
                className="todo-item"
                ref={elementRef}
                style={Object.assign({}, { opacity })}
                onTouchMove={() => {
                    console.log('as');
                }}
            >
                <span
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
    delTask: PropTypes.func
};
TodoItem.defaultProps = {
    text: '',
    id: 0,
    isCompleted: false,
    completeTask: () => {},
    activeListId: 0,
    delTask: () => {}
};

export default DropTarget(
    'TodoItem',
    {
        hover(props, monitor, component) {
            if (!component) {
                return null;
            }
            const node = component.getNode();
            if (!node) {
                return null;
            }

            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = node.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            props.moveCard(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex;
        }
    },
    connect => ({
        connectDropTarget: connect.dropTarget()
    })
)(
    DragSource(
        'TodoItem',
        {
            beginDrag: props => ({
                id: props.id,
                index: props.index
            })
        },
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        })
    )(TodoItem)
);
