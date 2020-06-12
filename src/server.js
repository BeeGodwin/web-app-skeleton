import express from 'express';
import RMSClient from '@bbc/rms-client';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import rootReducer from './app/reducers/rootReducer';
import App from './app/containers/App';

const app = express();
const port = 3000;

const rmsClient = RMSClient.createClient({
  apiKey: process.env.RMS_CLIENT_API_KEY
});

app.use('/dist', express.static('dist'));

app.get('/programme/:pid', 
  (req, res) => {
    const { pid } = req.params;
    const query = rmsClient.v2ProgrammePlayable().pid(pid);
    let preloadedState = {};

    rmsClient
      .get(query)
      .then(
        ({body}) => {preloadedState = body;},
        err => { res.send(err);}
      ).then(() => {
        const store = createStore(
          rootReducer, 
          preloadedState,
        );
        const html = renderToString(<Provider store={store}><App /></Provider>);
        const readyState = store.getState();
        res.send(renderPage(html, readyState));
      }
    );
  }
);

function renderPage(html, preloadedState) {
  return `
  <!doctype html>
  <html>
    <head>
      <title>Web App Skeleton</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/recipes/server-rendering/#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="/dist/main.js"></script>
    </body>
  </html>
  `;
}


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));