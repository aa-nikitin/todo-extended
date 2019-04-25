import { LIST_ADD, MENU_ACTIVE } from '../constants';

export const addList = (id, name) => ({
    type: LIST_ADD,
    payload: { id, name }
});

export const activeMenu = id => ({
    type: MENU_ACTIVE,
    payload: id
});
