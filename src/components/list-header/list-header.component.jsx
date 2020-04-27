import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Header, ContentWrapper, FilterButton, Counter, Number } from './list-header.styles.jsx';

import { changeStatusFilter } from '../../redux/tasks/tasks.actions';
import { selectActiveTasksCount, selectCompletedTasksCount } from '../../redux/tasks/tasks.selectors';

const ListHeader = ({ changeStatusFilter, countActive, countCompleted }) => {
  const changeStatus = status => {
    changeStatusFilter(status);
  }

  return (
    <Header>
      <ContentWrapper>
        <FilterButton onClick={() => changeStatus('all')} className='btn'>All</FilterButton>
        <FilterButton onClick={() => changeStatus('active')} className='btn'>Active</FilterButton>
        <FilterButton onClick={() => changeStatus('completed')} className='btn'>Completed</FilterButton>
      </ContentWrapper>
      <ContentWrapper>
        <Counter>Active Tasks: <Number>{countActive}</Number></Counter>
        <Counter>Finished Tasks: <Number>{countCompleted}</Number></Counter>
      </ContentWrapper>
    </Header>
  )
};

const mapStateToProps = createStructuredSelector({
  countActive: selectActiveTasksCount,
  countCompleted: selectCompletedTasksCount
});

const mapDispathToState = dispatch => ({
  changeStatusFilter: status => dispatch(changeStatusFilter(status))
});

export default  connect(mapStateToProps, mapDispathToState)(ListHeader);