import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background: rgba(33, 33, 33, 0.12);
`;

export const ModalContainer = styled.div`
  align-items: center;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  width:100%;
  display: flex;
  flex-direction: column;
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */
  /* margin: 0 auto; */
  padding: 40px 20px;
  /* outline: 2px solid black; */
  background: #FFFFFF;
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
 
    max-width: 320px;
    height: 648px;
 

  @media screen and (min-width: 768px) {
    max-width: 672px;
    height: 572px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 672px;
    height: 574px;
  }
`;

