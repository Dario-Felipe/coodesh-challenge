import { createGlobalStyle } from 'styled-components';
import colors from './tokens/colors';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
  }

  body {
    scroll-behavior: smooth;
    background: ${colors.secondary};
  }
`;

export default GlobalStyle;
