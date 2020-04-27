import tasksActionTypes from './tasks.types';

export const addNewTask = task => ({
  type: tasksActionTypes.ADD_NEW_TASK,
  payload: task
});

export const deleteTask = task => ({
  type: tasksActionTypes.DELETE_TASK,
  payload: task
});

export const makeTaskActive = task => ({
  type: tasksActionTypes.TASK_STATUS_ACTIVE,
  payload: task
});

export const makeTaskCompleted = task => ({
  type: tasksActionTypes.TASK_STATUS_COMPLETED,
  payload: task
});

export const changeStatusFilter = status => ({
  type: tasksActionTypes.STATUS_FILTER,
  payload: status
});