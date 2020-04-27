import React from 'react';
import { connect } from 'react-redux';

import { deleteTask, makeTaskCompleted, makeTaskActive } from '../../redux/tasks/tasks.actions';

import { TaskContainer, TaskText, TaskButton, DeleteIcon } from './task-item.styles';

const TaskItem = ( { task, deleteTask, makeTaskCompleted, makeTaskActive, isCompleted } ) => {
  const onDelete = () => {
    deleteTask(task);
  }

  const onComplete = () => {
    if (!isCompleted) {
      makeTaskCompleted(task);
    } else {
      makeTaskActive(task);
    }
  }

  return (
    <TaskContainer completed={isCompleted}>
      <TaskButton onClick={onComplete} status={isCompleted}>
        {
          isCompleted ? 'Undone' : 'Done!'
        }
      </TaskButton>
      <TaskText>{task.text}</TaskText>
      <DeleteIcon onClick={onDelete}>✖</DeleteIcon>
    </TaskContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  deleteTask: task => dispatch(deleteTask(task)),
  makeTaskCompleted: task => dispatch(makeTaskCompleted(task)),
  makeTaskActive: task => dispatch(makeTaskActive(task))
});

export default connect(null, mapDispatchToProps)(TaskItem);