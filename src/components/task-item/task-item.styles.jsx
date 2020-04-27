import styled, { css } from 'styled-components';

const completedTask = css`
  text-decoration: line-through;
  color: #8395a7;
`;

const getContainerDisplay = props => {
  if (props.completed) {
    return completedTask;
  }
}

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  border: 2px dashed #8395a7;
  
  div {
    ${getContainerDisplay}
  }
`;

export const TaskText = styled.div`
  overflow: auto;
  color: #f7d794;
  font-size: 20px;
  font-family: 'Baloo Bhaina 2', cursive;
`;

export const TaskButton = styled.button`
  background-color: transparent;
  color: ${props => props.status ? '#c44569' : '#32ff7e'}; 
  font-family: 'Kaushan Script', cursive;
  font-size: 16px;
  cursor: pointer;
`;

export const DeleteIcon = styled.span`
  cursor: pointer;
`;