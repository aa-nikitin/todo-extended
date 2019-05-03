import { FILTER_ACTIVE } from '../constants';

const ACTIVE_FILTER = 'all';

const activeFilter = (state = ACTIVE_FILTER, { type, payload = {} }) => {
    switch (type) {
        case FILTER_ACTIVE:
            return payload;
        default:
            return state;
    }
};

export default activeFilter;
