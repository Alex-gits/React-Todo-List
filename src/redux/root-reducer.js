import { combineReducers } from 'redux';

import tasksReducer from './tasks/tasks.reducer';

export default combineReducers({
  tasks: tasksReducer
});