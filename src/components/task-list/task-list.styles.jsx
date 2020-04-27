import styled from 'styled-components';

export const TaskListWrapper = styled.div`
  margin-top: 30px;
  -webkit-box-shadow: 6px 9px 5px 0px rgba(0,0,0,0.43);
  -moz-box-shadow: 6px 9px 5px 0px rgba(0,0,0,0.43);
  box-shadow: 6px 9px 5px 0px rgba(0,0,0,0.43);
  background-color: #4b4b4b;
  padding: 10px 20px;
  font-family: 'Baloo Bhaina 2', cursive;

  @media screen and (max-width: 400px) {
    padding: 10px 10px;
  }
`;