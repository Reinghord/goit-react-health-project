import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { breakpoints } from '../styles/breakpoints';

const { tablet } = breakpoints;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundModal};
`;

export const ModalContainer = styled.div`
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
  max-width: 320px;
  @media screen and (min-width: ${tablet}) {
    max-width: 672px;
  }
`;

export const CloseModal = styled.button`
  display: none;
  @media screen and (min-width: ${tablet}) {
    padding: 0;
    border: 0;
    display: block;
    -webkit-box-align: center;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.background};

    &:hover,
    &:focus {
      transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
      transform: scale(1.2);

      color: ${({ theme }) => theme.colors.buttonHover};
    }
  }
`;
export const CloseIcon = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
`;
