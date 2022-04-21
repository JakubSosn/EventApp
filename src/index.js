import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import {createRoot} from 'react-dom/client';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';


const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);


