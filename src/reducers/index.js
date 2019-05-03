import { combineReducers } from 'redux';
import lists from './lists';
import activeList from './menu';
import activeFilter from './filters';

const rootReducers = combineReducers({ lists, activeList, activeFilter });

export default rootReducers;
