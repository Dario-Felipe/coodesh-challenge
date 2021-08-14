import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import colors from './tokens/colors';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    scroll-behavior: smooth;
    background: ${colors.secondary};
  }
`;

export default GlobalStyle;
