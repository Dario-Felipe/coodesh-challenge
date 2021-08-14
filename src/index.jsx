import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, FontLoader } from '@gympass/yoga';
import GlobalStyle from './globalStyle';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <FontLoader />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
