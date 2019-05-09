import {
    LIST_ADD,
    MENU_ACTIVE,
    TASK_ADD,
    TASK_COMPLETE,
    TASK_DEL,
    FILTER_ACTIVE,
    TASK_SORT
} from '../constants';

export const addList = (id, name) => ({
    type: LIST_ADD,
    payload: { id, name }
});

export const addTask = (id, name, idList) => ({
    type: TASK_ADD,
    payload: { id, name, idList }
});

export const delTask = (id, idList) => ({
    type: TASK_DEL,
    payload: { id, idList }
});

export const completeTask = (id, idList) => ({
    type: TASK_COMPLETE,
    payload: { id, idList }
});

export const activeMenu = id => ({
    type: MENU_ACTIVE,
    payload: id
});

export const changeFilter = id => ({
    type: FILTER_ACTIVE,
    payload: id
});

export const sortTask = (moveTask, replaceTask, idList) => ({
    type: TASK_SORT,
    payload: { moveTask, replaceTask, idList }
});
