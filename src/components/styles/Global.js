import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondText};
  font-family: 'Verdana', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
`;
