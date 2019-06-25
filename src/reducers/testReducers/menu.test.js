import menu from '../menu';
import { activeMenu } from '../../actions';

const INIT_STATE = 0;

describe('test reducer menu', () => {
    it('test initial state', () => {
        const state0 = menu(undefined, {});

        expect(state0).toEqual(INIT_STATE);
    });

    it('test action activeMenu', () => {
        const idMenu = 4;
        const state0 = menu(INIT_STATE, activeMenu(idMenu));

        expect(state0).toBe(idMenu);
    });
});
