import React from 'react';

import { Wrapper } from './container.styles.jsx';

import TaskCreator from '../task-creator/task-creator.component';
import TaskList from '../task-list/task-list.component';

const Container = () => (
  <Wrapper>
    <TaskCreator />
    <TaskList />
  </Wrapper>
);

export default Container;