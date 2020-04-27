export const addNewTask = (tasks, newTask) => {
  const id = Math.random();
  const status = 'active';

  return [...tasks, {...newTask, id, status}]
};

export const deleteTask = (tasks, taskToDelete) => {
  return tasks.filter(task => task.id !== taskToDelete.id)
};

export const taskStatusActive = (tasks, taskToMakeActive) => {
  return tasks.map(task => task.id === taskToMakeActive.id ? { ...task, status: 'active' } : task)
};

export const taskStatusCompleted = (tasks, taskToMakeCompleted) => {
  return tasks.map(task => task.id === taskToMakeCompleted.id ? { ...task, status: 'completed' } : task)
};