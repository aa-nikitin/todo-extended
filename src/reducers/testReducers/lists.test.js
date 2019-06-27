import lists from '../lists';
import {
    addList,
    addTask,
    completeTask,
    delTask,
    sortTask,
    sortList,
    delList,
    editList,
    completeTaskAll,
    deleteTasksAll,
    copyTasks
} from '../../actions';

const INIT_STATE = [];
const idList = 1523;
const nameList = 'list name 1';

const arrayLists = [
    {
        id: idList,
        name: nameList,
        tasks: [],
        img: '',
        descr: ''
    },
    {
        id: 2121,
        name: 'list name 2',
        tasks: [],
        img: '',
        descr: ''
    },
    {
        id: 7453,
        name: 'list name 3',
        tasks: [],
        img: '',
        descr: ''
    }
];

const idTask = 23451;
const taskName = 'task name 1';

const arrayTask = [
    { id: idTask, text: taskName, isCompleted: false },
    { id: 21412, text: 'task name 2', isCompleted: false },
    { id: 53223, text: 'task name 3', isCompleted: false }
];

describe('test reducer lists', () => {
    it('test initial state', () => {
        const state = lists(undefined, {});

        expect(state).toEqual(INIT_STATE);
    });

    it('test action addList', () => {
        const state = lists(INIT_STATE, addList(idList, nameList));

        expect(state[0]).toEqual(arrayLists[0]);
    });

    it('test action addTask', () => {
        const arrayListsTask = [
            { ...arrayLists[0], tasks: [{ ...arrayTask[0] }] }
        ];
        const state0 = lists(INIT_STATE, addList(idList, nameList));
        const state1 = lists(state0, addTask(idTask, taskName, idList));

        expect(state1).toEqual(arrayListsTask);
    });

    it('test action completeTask', () => {
        const arrayListsTask = [{ ...arrayLists[0], tasks: [...arrayTask] }];
        const state = lists(arrayListsTask, completeTask(idTask, idList));

        expect(state[0].tasks[0].isCompleted).toBe(true);
    });

    it('test action delTask', () => {
        const arrayListsTask = [
            { ...arrayLists[0], tasks: [{ ...arrayTask[0] }] }
        ];
        const state = lists(arrayListsTask, delTask(idTask, idList));

        expect(state[0].tasks).toEqual([]);
    });

    it('test action sortTask', () => {
        const arrayListsTask = [{ ...arrayLists[0], tasks: [...arrayTask] }];
        const arrayTasks = arrayListsTask[0].tasks;

        expect(arrayTasks[0]).toEqual(arrayTask[0]);

        const state = lists(
            arrayListsTask,
            sortTask(arrayTasks[0], arrayTasks[2], idList)
        );

        expect(state[0].tasks[2]).toEqual(arrayTask[0]);
    });

    it('test action sortList', () => {
        const arrayListsTask = [...arrayLists];

        expect(arrayListsTask[0]).toEqual(arrayLists[0]);
        const state = lists(
            arrayListsTask,
            sortList(arrayListsTask[0], arrayListsTask[2])
        );

        expect(state[2]).toEqual(arrayLists[0]);
    });

    it('test action delList', () => {
        const arrayListsTask = [...arrayLists];
        expect(arrayListsTask.length).toEqual(3);

        const state = lists(arrayListsTask, delList(idList));
        expect(state[0]).not.toEqual(arrayLists[0]);
        expect(state.length).toEqual(2);
    });

    it('test action editList', () => {
        const arrayListsTask = [...arrayLists];
        const editListInfo = { name: '111', img: '222', descr: '333' };
        const state = lists(arrayListsTask, editList(idList, editListInfo));
        const changeData = {
            name: state[0].name,
            img: state[0].img,
            descr: state[0].descr
        };

        expect(changeData).toEqual(editListInfo);
    });

    it('test action completeTaskAll', () => {
        const arrayListsTask = [{ ...arrayLists[0], tasks: [...arrayTask] }];
        const state0 = lists(arrayListsTask, completeTaskAll(idList, true));

        state0[0].tasks.forEach(item => expect(item.isCompleted).toEqual(true));

        const state1 = lists(state0, completeTaskAll(idList, false));

        state1[0].tasks.forEach(item =>
            expect(item.isCompleted).toEqual(false)
        );
    });

    it('test action deleteTasksAll', () => {
        const newTask = {
            id: 1412422221,
            text: 'task name 4',
            isCompleted: true
        };
        const arrayListsTask = [
            {
                ...arrayLists[0],
                tasks: [...arrayTask, newTask]
            }
        ];
        const stateAll = lists(arrayListsTask, deleteTasksAll(idList, 'all'));

        expect(stateAll[0].tasks).toEqual([]);

        const stateActive = lists(
            arrayListsTask,
            deleteTasksAll(idList, 'active')
        );

        expect(stateActive[0].tasks).toEqual([newTask]);

        const stateComplete = lists(
            arrayListsTask,
            deleteTasksAll(idList, 'complete')
        );

        expect(stateComplete[0].tasks).toEqual(arrayTask);
    });

    it('test action copyTasks', () => {
        const arrayListsTask = [...arrayLists];
        expect(arrayListsTask[0].tasks).toEqual([]);

        const state = lists(arrayListsTask, copyTasks(idList, arrayTask, 1));
        expect(state[0].tasks).toEqual(arrayTask);
    });
});
