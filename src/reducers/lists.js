import { LIST_ADD } from '../constants';

const MENU = [
    // {
    //     id: 2,
    //     name: 'asd1',
    //     tasks: [{ id: 1, text: '1111', isCompleted: false }]
    // },
    // {
    //     id: 32,
    //     name: 'asdasfasf2v',
    //     tasks: [
    //         { id: 1, text: 'asdasd', isCompleted: false },
    //         { id: 2, text: 'sdfvx', isCompleted: true },
    //         { id: 3, text: 'xcvsd', isCompleted: false }
    //     ]
    // },
    // { id: 235, name: 'fasfasf3asd', tasks: [] }
];

const lists = (state = MENU, { type, payload }) => {
    switch (type) {
        case LIST_ADD:
            const { id, name } = payload;
            const newList = {
                id,
                name,
                tasks: [],
                descr: ''
            };
            return [...state, newList];
        default:
            return state;
    }
};

export default lists;
