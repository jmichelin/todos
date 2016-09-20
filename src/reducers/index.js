import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({ //combines reducers, think of the funnel
  todos,
  visibilityFilter,
});

export default todoApp;
