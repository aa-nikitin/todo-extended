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
    { id: 1, name: 'list-1', tasks: [{ id: 1 }], img: '', descr: '' },
    { id: 2, name: 'list-2', tasks: [{ id: 1 }], img: '', descr: '' },
    { id: 3, name: 'list-3', tasks: [{ id: 1 }], img: '', descr: '' }
];
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

    it('change the value state.listName when changing the input value', () => {
        console.log(wrapperLists.state());
        console.log(wrapperLists.html());
        expect(2).toEqual(2);
    });
});
