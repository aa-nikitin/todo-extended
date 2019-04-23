import { LIST_ADD } from '../constants';

export const addList = (id, name) => ({
    LIST_ADD,
    payload: { id, name }
});
