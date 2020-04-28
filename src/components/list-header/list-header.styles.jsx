import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 500px) {
    order: 1;
  }
`;
export const ContentWrapper = styled.div``;

export const FilterButton = styled.button`
  margin-right: 15px;
  color: #f7d794;
  background-color: transparent;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const Counter = styled.span`
  margin-right: 15px;
  color: #c44569;
  font-weight: 700;

  &:last-child {
    margin-right: 0;
  }
`;

export const Number = styled.span``;