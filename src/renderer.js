import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import template from './index.ejs';
import App from './client/App';

export default () => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();

  return template({
    content,
    title: 'Universal React!',
    headHtmlSnippet: styleTags
  });
};
