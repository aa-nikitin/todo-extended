import { LIST_ADD } from '../constants';

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
        default:
            return state;
    }
};

export default lists;
