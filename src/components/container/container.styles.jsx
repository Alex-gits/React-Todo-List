import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 680px;
  margin: 0 auto;
  padding: 100px 0;

  @media screen and (max-width: 600px) {
    width: 370px;
    padding: 50px 0;
  }

  @media screen and (max-width: 374px) {
    width: 318px;
    padding: 50px 0;
  }
`;