import React from 'react';
import { Lists } from './index';
import { mount } from 'enzyme';
import { DragDropContextProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import {
    addList,
    activeMenu,
    delList,
    activeListForEdit,
    sortList
} from '../../actions';

const LISTS = [
    { id: 1, name: 'list-1', tasks: [], img: '', descr: '' },
    { id: 2, name: 'list-2', tasks: [], img: '', descr: '' },
    { id: 3, name: 'list-3', tasks: [], img: '', descr: '' }
];
const LISTS_EMPTY = [];
const ACTIVE_LIST_ID = 0;

const wrapper = mount(
    <DragDropContextProvider
        backend={TouchBackend({ enableMouseEvents: true })}
    >
        <Lists
            lists={LISTS}
            activeListId={ACTIVE_LIST_ID}
            activeMenu={activeMenu}
            sortList={sortList}
            addList={addList}
            delList={delList}
            activeListForEdit={activeListForEdit}
        />
    </DragDropContextProvider>
);

describe('lists test', () => {
    const wrapperLists = wrapper.find(Lists);

    it('change the value state.listName when changing the input value', () => {
        const listName = 'test menu';
        wrapper.find('input[name="menu-input"]').simulate('change', {
            target: { name: 'menu-input', value: listName }
        });

        expect(wrapperLists.state().listName).toEqual(listName);
    });

    it('clearing state.listName when the list is created', () => {
        const listName = 'test menu';
        wrapper.find('input[name="menu-input"]').simulate('change', {
            target: { name: 'menu-input', value: listName }
        });

        wrapper.find('#add-todo-button').simulate('click');
        expect(wrapperLists.state().listName).toBeFalsy();
    });

    it('menu display in mobile version', () => {
        wrapper.find('#mobile-menu-button').simulate('click');
        expect(wrapperLists.state().showMenu).toBe(true);

        wrapper.find('#mobile-menu-button').simulate('click');
        expect(wrapperLists.state().showMenu).toBe(false);
    });

    it('active menu item (a function of activeList)', () => {
        expect(wrapperLists.instance().activeList(LISTS, 2).id).toBe(2);
    });

    it('if the item id of the active item is not found', () => {
        expect(wrapperLists.instance().activeList(LISTS, 24).id).toBe(3);
    });

    it('an empty list returns an empty object', () => {
        expect(wrapperLists.instance().activeList(LISTS_EMPTY, 2)).toEqual({});
    });
});
