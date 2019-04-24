import { LIST_ADD } from '../constants';

export const addList = (id, name) => ({
    type: LIST_ADD,
    payload: { id, name }
});
