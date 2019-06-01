import { load } from 'redux-localstorage-simple';

export const LIST_ADD = 'LIST_ADD';
export const LIST_DEL = 'LIST_DEL';
export const ACTIVE_LIST_FOR_EDIT = 'ACTIVE_LIST_FOR_EDIT';
export const LIST_EDIT = 'LIST_EDIT';
export const TASK_ADD = 'TASK_ADD';
export const TASK_COMPLETE = 'TASK_COMPLETE';
export const TASK_COMPLETE_ALL = 'TASK_COMPLETE_ALL';
export const TASKS_DELETE_ALL = 'TASKS_DELETE_ALL';
export const TASK_DEL = 'TASK_DEL';
export const TASK_SORT = 'TASK_SORT';
export const TASKS_COPY = 'TASKS_COPY';

export const MENU_ACTIVE = 'MENU_ACTIVE';
export const FILTER_ACTIVE = 'FILTER_ACTIVE';

export const TODO_LIST = load({ namespace: 'todo-list' });
