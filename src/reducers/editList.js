import { LIST_EDIT } from '../constants';

const ACTIVE_LIST_EDIT = 0;

const editList = (state = ACTIVE_LIST_EDIT, { type, payload = {} }) => {
    switch (type) {
        case LIST_EDIT:
            return payload;
        default:
            return state;
    }
};

export default editList;
