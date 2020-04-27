import { createSelector } from 'reselect';

const selectTasks = state => state.tasks;

export const selectTasksArray = createSelector(
  [selectTasks],
  tasks => tasks.tasksArray
);

export const selectActiveTasks = createSelector(
  [selectTasksArray],
  tasksArray => tasksArray.filter(task => task.status === 'active')
);

export const selectCompletedTasks = createSelector(
  [selectTasksArray],
  tasksArray => tasksArray.filter(task => task.status === 'completed')
);

export const selectTasksStatus = createSelector(
  [selectTasks],
  tasks => tasks.status
);

export const selectTasksCount = createSelector(
  [selectTasksArray],
  tasksArray => tasksArray.length
);

export const selectCompletedTasksCount = createSelector(
  [selectCompletedTasks],
  tasksArray => tasksArray.length
);

export const selectActiveTasksCount = createSelector(
  [selectActiveTasks],
  tasksArray => tasksArray.length
);