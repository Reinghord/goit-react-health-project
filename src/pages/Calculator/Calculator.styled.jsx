import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;

 
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;