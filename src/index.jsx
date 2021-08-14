import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, FontLoader } from '@gympass/yoga';
import { Normalize } from 'styled-normalize';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <FontLoader />
      <Normalize />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
