import { FILTER_ACTIVE, TODO_LIST } from '../constants';

let ACTIVE_FILTER = TODO_LIST.activeFilter;
if (!ACTIVE_FILTER) {
    ACTIVE_FILTER = 'all';
}

const activeFilter = (state = ACTIVE_FILTER, { type, payload = {} }) => {
    switch (type) {
        case FILTER_ACTIVE:
            return payload;
        default:
            return state;
    }
};

export default activeFilter;
