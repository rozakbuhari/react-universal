import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './index.ejs';
import App from './client/App';

export default () => {
  const content = renderToString(<App />);

  return template({
    content,
    title: 'Universal React!'
  });
};
