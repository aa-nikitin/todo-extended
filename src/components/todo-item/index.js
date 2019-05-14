import { DragSource, DropTarget } from 'react-dnd';
import TodoItem from './TodoItem';

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
            props.moveTask(dragIndex, hoverIndex);
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
        (connect, monitor) => {
            return {
                connectDragSource: connect.dragSource(),
                isDragging: monitor.isDragging(),
                sourceOffset: monitor.getSourceClientOffset()
            };
        }
    )(TodoItem)
);
