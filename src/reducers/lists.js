import { LIST_ADD, TASK_ADD, TASK_COMPLETE } from '../constants';

const MENU = [];

const lists = (state = MENU, { type, payload }) => {
    switch (type) {
        case LIST_ADD:
            const { id, name } = payload;
            const newList = {
                id,
                name,
                tasks: [],
                descr: ''
            };
            return [...state, newList];
        case TASK_ADD:
            return [...state].map(list => {
                const { id, name, idList } = payload;
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
                const { id, idList } = payload;
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

        // console.log(payload);

        // return state;
        default:
            return state;
    }
};

export default lists;
