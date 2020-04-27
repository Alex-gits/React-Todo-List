import tasksActionTypes from './tasks.types';

import { addNewTask, deleteTask, taskStatusActive, taskStatusCompleted } from './tasks.utils';

const INITIAL_STATE = {
  tasksArray: [],
  status: 'all'
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tasksActionTypes.ADD_NEW_TASK:
      return {
        ...state,
        tasksArray: addNewTask(state.tasksArray, action.payload)
      }
    case tasksActionTypes.DELETE_TASK:
      return {
        ...state,
        tasksArray: deleteTask(state.tasksArray, action.payload)
      }
    case tasksActionTypes.TASK_STATUS_ACTIVE:
      return {
        ...state,
        tasksArray: taskStatusActive(state.tasksArray, action.payload)
      }
    case tasksActionTypes.TASK_STATUS_COMPLETED:
      return {
        ...state,
        tasksArray: taskStatusCompleted(state.tasksArray, action.payload)
      }
    case tasksActionTypes.STATUS_FILTER:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state;
  }
}

export default tasksReducer;