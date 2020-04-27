import React from 'react';

import { TaskCreationWrapper, Title } from './task-creator.styles.jsx';

import NewTaskForm from '../new-task-form/new-task-form.component';

const TaskCreator = () => (
  <TaskCreationWrapper>
    <Title>Personal ToDo List</Title>
    <NewTaskForm />
  </TaskCreationWrapper>
);

export default TaskCreator;