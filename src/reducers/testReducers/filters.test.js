import filters from '../filters';
import { changeFilter } from '../../actions';

const INIT_STATE = 'all';

describe('test reducer filters', () => {
    it('test initial state', () => {
        const state0 = filters(undefined, {});

        expect(state0).toEqual(INIT_STATE);
    });

    it('test action changeFilter', () => {
        const idFilter = 'active';
        const state0 = filters(INIT_STATE, changeFilter(idFilter));

        expect(state0).toBe(idFilter);
    });
});
