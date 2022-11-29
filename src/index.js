import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './app/styles';
import Provider from './app/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);