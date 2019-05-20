import { combineReducers } from 'redux';
import lists from './lists';
import activeList from './menu';
import activeFilter from './filters';
import editList from './editList';

const rootReducers = combineReducers({
    lists,
    activeList,
    activeFilter,
    editList
});

export default rootReducers;
