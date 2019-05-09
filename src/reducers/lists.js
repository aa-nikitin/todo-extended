import {
    LIST_ADD,
    TASK_ADD,
    TASK_COMPLETE,
    TASK_DEL,
    TASK_SORT,
    TODO_LIST
} from '../constants';

let LISTS = TODO_LIST.lists;
if (!LISTS || !LISTS.length) {
    LISTS = [];
}

const lists = (state = LISTS, { type, payload = {} }) => {
    const { id, name, idList } = payload;
    switch (type) {
        case LIST_ADD:
            const newList = {
                id,
                name,
                tasks: [],
                descr: ''
            };
            return [...state, newList];

        case TASK_ADD:
            return [...state].map(list => {
                if (list.id === idList) {
                    return {
                        ...list,
                        tasks: [
                            ...list.tasks,
                            {
                                id: id,
                                text: name,
                                isCompleted: false
                            }
                        ]
                    };
                }
                return list;
            });

        case TASK_COMPLETE:
            return [...state].map(list => {
                if (list.id === idList) {
                    return {
                        ...list,
                        tasks: [...list.tasks].map(task => {
                            if (task.id === id) {
                                return {
                                    ...task,
                                    isCompleted: !task.isCompleted
                                };
                            }
                            return task;
                        })
                    };
                }

                return list;
            });

        case TASK_DEL:
            return [...state].map(list => {
                if (list.id === idList) {
                    return {
                        ...list,
                        tasks: [...list.tasks].filter(task => task.id !== id)
                    };
                }
                return list;
            });

        case TASK_SORT:
            const { moveTask, replaceTask } = payload;
            return [...state].map(list => {
                if (list.id === idList) {
                    return {
                        ...list,
                        tasks: [...list.tasks].map(task => {
                            if (task.id === moveTask.id) {
                                return { ...replaceTask };
                            }
                            if (task.id === replaceTask.id) {
                                return { ...moveTask };
                            }
                            return task;
                        })
                    };
                }
                return list;
            });

        default:
            return state;
    }
};

export default lists;
