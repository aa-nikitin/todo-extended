import { ACTIVE_LIST_FOR_EDIT } from '../constants';

const ACTIVE_LIST_EDIT = 0;

const editList = (state = ACTIVE_LIST_EDIT, { type, payload = 0 }) => {
    switch (type) {
        case ACTIVE_LIST_FOR_EDIT:
            return payload;
        default:
            return state;
    }
};

export default editList;
