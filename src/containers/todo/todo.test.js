import React from 'react';
import { ToDo } from './index';
import { mount } from 'enzyme';
import { DragDropContextProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import {
    addTask,
    completeTask,
    delTask,
    changeFilter,
    sortTask,
    completeTaskAll,
    deleteTasksAll,
    copyTasks
} from '../../actions';

const LISTS = [
    {
        id: 1,
        name: 'list-1',
        tasks: [
            { id: 1, text: 'list-1 task 1', isCompleted: false },
            { id: 2, text: 'list-1 task 2', isCompleted: true },
            { id: 3, text: 'list-1 task 3', isCompleted: false }
        ],
        img: '',
        descr: ''
    },
    {
        id: 2,
        name: 'list-2',
        tasks: [
            { id: 1, text: 'list-2 task 1', isCompleted: false },
            { id: 2, text: 'list-2 task 2', isCompleted: false },
            { id: 3, text: 'list-2 task 3', isCompleted: false }
        ],
        img: '',
        descr: ''
    }
];
const LISTS_EMPTY = [];
const ACTIVE_LIST_ID = 1;
const ACTIVE_FILTER = 'all';

const wrapper = mount(
    <DragDropContextProvider
        backend={TouchBackend({ enableMouseEvents: true })}
    >
        <ToDo
            lists={LISTS}
            activeListId={ACTIVE_LIST_ID}
            activeFilter={ACTIVE_FILTER}
            addTask={addTask}
            completeTask={completeTask}
            delTask={delTask}
            changeFilter={changeFilter}
            sortTask={sortTask}
            completeTaskAll={completeTaskAll}
            deleteTasksAll={deleteTasksAll}
            copyTasks={copyTasks}
        />
    </DragDropContextProvider>
);

describe('lists test', () => {
    const wrapperLists = wrapper.find(ToDo);

    it('change the value state.taskName when changing the input value', () => {
        const listName = 'test todo';

        wrapper.find('input[name="todo-input"]').simulate('change', {
            target: { name: 'todo-input', value: listName }
        });
        expect(wrapperLists.state().taskName).toEqual(listName);
    });

    it('clearing state.taskName when the task is created by pressing Button', () => {
        const listName = 'test todo';

        wrapper.find('input[name="todo-input"]').simulate('change', {
            target: { name: 'todo-input', value: listName }
        });
        expect(wrapperLists.state().taskName).not.toEqual('');
        wrapper.find('#add-task-button').simulate('click');
        expect(wrapperLists.state().taskName).toEqual('');
    });

    it('clearing state.taskName when the task is created by pressing Enter', () => {
        const listName = 'test todo';

        wrapper.find('input[name="todo-input"]').simulate('change', {
            target: { name: 'todo-input', value: listName }
        });
        expect(wrapperLists.state().taskName).not.toEqual('');
        wrapperLists
            .find('input[name="todo-input"]')
            .simulate('keypress', { key: 'Enter' });
        expect(wrapperLists.state().taskName).toEqual('');
    });

    it('active list (a function of activeList)', () => {
        expect(wrapperLists.instance().activeList(LISTS, 2).id).toBe(2);
    });

    it('if the item id of the active list is not found (a function of activeList)', () => {
        expect(wrapperLists.instance().activeList(LISTS, 24).id).toBe(2);
    });

    it('an empty list returns an empty object tasks (a function of activeList)', () => {
        expect(wrapperLists.instance().activeList(LISTS_EMPTY, 24)).toEqual({
            tasks: []
        });
    });

    it('number of all tasks (a function of filterTasks)', () => {
        const activeTasks = wrapperLists.instance().activeList(LISTS, 1).tasks;
        const countTasks = wrapperLists
            .instance()
            .filterTasks(activeTasks, 'all').length;

        expect(countTasks).toBe(3);
    });

    it('number of completed tasks (a function of filterTasks)', () => {
        const activeTasks = wrapperLists.instance().activeList(LISTS, 1).tasks;
        const countTasks = wrapperLists
            .instance()
            .filterTasks(activeTasks, 'complete').length;

        expect(countTasks).toBe(1);
    });

    it('number of active tasks (a function of filterTasks)', () => {
        const activeTasks = wrapperLists.instance().activeList(LISTS, 1).tasks;
        const countTasks = wrapperLists
            .instance()
            .filterTasks(activeTasks, 'active').length;

        expect(countTasks).toBe(2);
    });
});
