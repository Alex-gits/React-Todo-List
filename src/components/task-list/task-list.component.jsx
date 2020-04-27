import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  selectTasksArray, 
  selectTasksCount, 
  selectActiveTasks, 
  selectCompletedTasks, 
  selectTasksStatus } from '../../redux/tasks/tasks.selectors';

import ListHeader from '../list-header/list-header.component';
import TaskItem from '../task-item/task-item.component';

import { TaskListWrapper } from './task-list.styles.jsx';

const TaskList = ({ tasks, completedTasks, activeTasks, count, status }) => {
  return count ? (
    <TaskListWrapper>
      <ListHeader />
      {
        status === 'all' ? tasks.map(task => <TaskItem key={task.id} task={task} isCompleted={task.status === 'completed' ? true : false} />) : null
      }

      {
        status === 'completed' ? completedTasks.map(task => <TaskItem key={task.id} isCompleted={task.status === 'completed' ? true : false} task={task} status={status} />) : null
      }

      {
        status === 'active' ? activeTasks.map(task => <TaskItem key={task.id} task={task} isCompleted={task.status === 'completed' ? true : false} status={status} />) : null
      } 
    </TaskListWrapper>
  ) : null
};

const mapStateToProps = createStructuredSelector({
  tasks: selectTasksArray,
  completedTasks: selectCompletedTasks,
  activeTasks: selectActiveTasks,
  count: selectTasksCount,
  status: selectTasksStatus
});

export default connect(mapStateToProps)(TaskList);