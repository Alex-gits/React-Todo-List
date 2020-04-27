import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addNewTask } from '../../redux/tasks/tasks.actions';
import { FromContainer, Form, TextWrapper, Placeholder, TaskInput, SubmitButton } from './new-task-form.styles.jsx';

const NewTaskForm = ({ addNewTask }) => {
  const [taskInfo, setTaskInfo] = useState({
    text: ''
  });

  const { text } = taskInfo;

  const handleChange = event => {
    const { name, value } = event.target;

    setTaskInfo({...taskInfo, [name]: value})
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (text.length <= 1) {
      alert('Please enter task description')
      return;
    }

    addNewTask({ text });

    setTaskInfo({text: ''})
  }

  return (
    <FromContainer>
    <Form onSubmit={handleSubmit}>
      <TextWrapper>
        <Placeholder className='input-placeholder' text={taskInfo.text}>Write your task here...</Placeholder>
        <TaskInput type="text" name="text" value={text} onChange={handleChange} maxLength='50'/>
      </TextWrapper>
      <SubmitButton type='submit'>Done!</SubmitButton>
    </Form>
  </FromContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addNewTask: task => dispatch(addNewTask(task))
});

export default connect(null, mapDispatchToProps)(NewTaskForm);