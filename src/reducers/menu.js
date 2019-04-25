import { MENU_ACTIVE } from '../constants';

const ACTIVE_MENU = 2;

const activeMenu = (state = ACTIVE_MENU, { type, payload }) => {
    switch (type) {
        case MENU_ACTIVE:
            return payload;
        default:
            return state;
    }
};

export default activeMenu;
