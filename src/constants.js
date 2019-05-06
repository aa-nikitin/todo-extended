import { load } from 'redux-localstorage-simple';

export const LIST_ADD = 'LIST_ADD';
export const TASK_ADD = 'TASK_ADD';
export const TASK_COMPLETE = 'TASK_COMPLETE';
export const TASK_DEL = 'TASK_DEL';

export const MENU_ACTIVE = 'MENU_ACTIVE';
export const FILTER_ACTIVE = 'FILTER_ACTIVE';

export const TODO_LIST = load({ namespace: 'todo-list' });
