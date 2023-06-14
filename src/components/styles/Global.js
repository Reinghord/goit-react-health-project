import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    color: ${({ theme }) => theme.colors.secondText};
  font-family: 'Verdana', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  background: ${({ theme }) => theme.colors.background}}
  ${
    '' /* @media screen and (max-width:767px) {
    background: ${({ theme }) => theme.colors.background}} */
  }
  ${
    '' /* @media screen and (min-width: 768px) {background: ${({ theme }) =>
    theme.colors.backgroundGradientTablet}}
  @media screen and (min-width: 1200px) {background: ${({ theme }) =>
    theme.colors.backgroundGradientDesktop}} */
  }
`;

// export const Container = styled.div`
//   @media screen and (min-width: 768px) {
//     width: 768px;
//     height: 1000px;
//     background-image: url(${imgRot});
//     background-repeat: no-repeat;
//     background-size: 428px 602px;
//     background-position: bottom right;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//     height: 850px;
//     background-image: url(${img});
//     background-repeat: no-repeat;
//     background-size: 740px 842px;
//     background-position: bottom right;
//   }
// `;
