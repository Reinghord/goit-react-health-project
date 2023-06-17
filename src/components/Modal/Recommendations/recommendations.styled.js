import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { StyledBtnAuthAccent } from '../../Login/Login.styled.jsx';
const { tablet} = breakpoints;

export const Wrapper = styled.div`
  margin-bottom: 60px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 40px;
  }
`;
export const Title = styled.h2`
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.firstText};
  padding: 0;
  margin: 40px 0 20px 0;
  @media screen and (min-width: ${tablet}) {
    font-size: 26px;
    text-align: center;
    margin: 40px 0 20px 0;
  }
`;

export const CaloriesWrapper = styled.div`
  text-align: center;
  height: 62px;
  margin-bottom: 32px;
`;

export const Calories = styled.h1`
  margin: 0px;
  padding: 7px;
  font-size: 48px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.scroll};
`;

export const Kkal = styled.span`
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.scroll};
`;

export const Recommend = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderInput};
  margin-bottom: 40px;
  width: 280px;
  height: 263;

  @media screen and (min-width: ${tablet}) {
    width: 330px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;

export const Caption = styled.h3`
  margin: 20px 0 20px 5px;
  font-size: 14px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.firstText};

  @media screen and (min-width: ${tablet}) {
    margin: 12px 0 20px 5px;
  }
`;

export const ProductsList = styled.ul`
  margin: 0;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow-y: scroll;
  height: 192px;
  width: 100%;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.colors.backroundSecond};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scroll};
  }
  @media screen and (min-width: ${tablet}) {
    height: 172px;
  }
`;

export const ProductItem = styled.li`
  margin-bottom: 10px;
  overflow-wrap: normal;
`;

export const Product = styled.p`
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.secondText};
`;

export const EnterButton = styled(StyledBtnAuthAccent)`
  margin: 0 auto;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
