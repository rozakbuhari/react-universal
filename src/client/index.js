/* global PRODUCTION */
import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';

const renderer = () => process.env.NODE_ENV === 'production' ? hydrate : render;

renderer()(
  <App />,
  document.getElementById('app')
);
