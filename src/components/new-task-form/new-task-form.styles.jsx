import styled, { css } from 'styled-components';

const inputActive = css`
  top: -30px;
  font-size: 12px;
  display: block;
`;

const checkInputValue = props => {
  if (props.text !== '') {
    return inputActive;
  }
}

export const FromContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const TextWrapper = styled.div`
  border-bottom: 2px solid #c44569;
  width: 300px;
  position: relative;
  margin-bottom: 30px;

  &:focus-within .input-placeholder {
    top: -30px;
    font-size: 12px;
    display: block;
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 10px;
  color: #f7d794;
  font-family: 'Kaushan Script', cursive;
  transition: all .3s linear;
  ${checkInputValue}
`;

export const TaskInput = styled.input`
  background-color: transparent;
  font-size: 20px;
  color: #c44569;
  z-index: 99;
  position: relative;
  font-family: 'Baloo Bhaina 2', cursive;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background-color: #c44569;
  font-size: 16px;
  border: 2px solid #c44569;
  font-family: 'Baloo Bhaina 2', cursive;
  font-size: 18px;
  font-weight: 500;
  padding-top: 2px;
  color: #f7d794;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    border: 2px solid #f7d794;
    background-color: #a33453;
  }
`;