import { LIST_ADD, MENU_ACTIVE, TASK_ADD } from '../constants';

export const addList = (id, name) => ({
    type: LIST_ADD,
    payload: { id, name }
});

export const addTask = (id, name, idList) => ({
    type: TASK_ADD,
    payload: { id, name, idList }
});

export const activeMenu = id => ({
    type: MENU_ACTIVE,
    payload: id
});
