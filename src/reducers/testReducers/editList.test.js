import editList from '../editList';
import { activeListForEdit } from '../../actions';

const INIT_STATE = 0;

describe('test reducer editList', () => {
    it('test initial state', () => {
        const state0 = editList(undefined, {});

        expect(state0).toEqual(INIT_STATE);
    });

    it('test action activeListForEdit', () => {
        const idEditList = 12;
        const state0 = editList(INIT_STATE, activeListForEdit(idEditList));

        expect(state0).toBe(idEditList);
    });
});
