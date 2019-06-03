import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MenuItem = React.forwardRef(
    (
        {
            nameMenuItem,
            activeMenu,
            id,
            activeClass,
            delList,
            activeListForEdit,
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
            <li className={`menu-item ${activeClass}`}>
                <span
                    style={Object.assign({}, { transform })}
                    onClick={() => activeMenu(id)}
                    className="menu-item__name"
                >
                    {nameMenuItem}
                </span>
                <span className="menu-item__options">
                    <i
                        onClick={() => activeListForEdit(id)}
                        className="fas fa-pen-square menu-item__button"
                    />
                    <i
                        onClick={() => delList(id)}
                        className="fas fa-minus-square menu-item__button"
                    />
                </span>
                <i
                    className="fas fa-expand-arrows-alt menu-item__button"
                    ref={elementRef}
                />
            </li>
        );
    }
);

MenuItem.propTypes = {
    nameMenuItem: PropTypes.string,
    activeMenu: PropTypes.func,
    id: PropTypes.number,
    activeClass: PropTypes.string,
    activeListForEdit: PropTypes.func,
    isDragging: PropTypes.bool,
    connectDragSource: PropTypes.func,
    connectDropTarget: PropTypes.func,
    sourceOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    })
};
MenuItem.defaultProps = {
    nameMenuItem: '',
    activeMenu: () => {},
    id: 0,
    activeClass: '',
    activeListForEdit: () => {},
    isDragging: false,
    connectDragSource: () => {},
    connectDropTarget: () => {},
    sourceOffset: { x: 0, y: 0 }
};

export default MenuItem;
