import React from 'react';
import { EditList } from './index';
import { mount } from 'enzyme';
import { activeListForEdit, editList } from '../../actions';

const LISTS = [
    { id: 1, name: 'list-1', tasks: [], img: '', descr: '' },
    { id: 2, name: 'list-2', tasks: [], img: '', descr: '' },
    { id: 3, name: 'list-3', tasks: [], img: '', descr: '' }
];

const EDIT_LIST = 2;

const wrapper = mount(
    <EditList
        lists={LISTS}
        editList={EDIT_LIST}
        editListAction={editList}
        activeListForEdit={activeListForEdit}
    />
);

const wrapperNoEdit = mount(
    <EditList
        lists={LISTS}
        editList={0}
        editListAction={editList}
        activeListForEdit={activeListForEdit}
    />
);

describe('edit list test', () => {
    it('the output of the object with an existing id to edit', () => {
        expect(wrapper.instance().activeList().id).toBe(2);
    });

    it('output object if not existing id to edit', () => {
        expect(wrapperNoEdit.instance().activeList()).toBeUndefined();
    });
});
