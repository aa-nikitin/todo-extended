import { combineReducers } from 'redux';
import lists from './lists';
import activeList from './menu';

const rootReducers = combineReducers({ lists, activeList });

export default rootReducers;
