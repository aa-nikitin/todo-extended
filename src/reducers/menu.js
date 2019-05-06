import { MENU_ACTIVE, TODO_LIST } from '../constants';

let ACTIVE_MENU = TODO_LIST.activeList;
if (!ACTIVE_MENU) {
    ACTIVE_MENU = 0;
}

const activeMenu = (state = ACTIVE_MENU, { type, payload = {} }) => {
    switch (type) {
        case MENU_ACTIVE:
            return payload;
        default:
            return state;
    }
};

export default activeMenu;
