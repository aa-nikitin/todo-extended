import {
    LIST_ADD,
    MENU_ACTIVE,
    TASK_ADD,
    TASK_COMPLETE,
    TASK_DEL,
    FILTER_ACTIVE,
    TASK_SORT,
    LIST_DEL,
    ACTIVE_LIST_FOR_EDIT,
    LIST_EDIT,
    TASK_COMPLETE_ALL,
    TASKS_DELETE_ALL,
    TASKS_COPY
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

export const completeTaskAll = (idList, flag) => ({
    type: TASK_COMPLETE_ALL,
    payload: { idList, flag }
});

export const deleteTasksAll = (idList, idFilter) => ({
    type: TASKS_DELETE_ALL,
    payload: { idList, idFilter }
});

export const copyTasks = (idList, tasks, newId) => ({
    type: TASKS_COPY,
    payload: { idList, tasks, newId }
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

export const delList = idList => ({
    type: LIST_DEL,
    payload: { idList }
});

export const activeListForEdit = id => ({
    type: ACTIVE_LIST_FOR_EDIT,
    payload: id
});

export const editList = (idList, { name, img, descr }) => ({
    type: LIST_EDIT,
    payload: { idList, name, img, descr }
});
