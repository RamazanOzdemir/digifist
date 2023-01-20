import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import '@/styles/index.scss';
import React from 'react';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
