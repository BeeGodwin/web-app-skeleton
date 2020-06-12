import express from 'express';
import { getProgramme } from './app/clients/rms';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import renderInTemplate from './app/render';
import rootReducer from './app/reducers/rootReducer';
import App from './app/containers/App';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist'));

app.get('/programme/:pid', 
  (req, res) => {
    const { pid } = req.params;
    let preloadedState = {};
    getProgramme(pid)
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
        res.send(renderInTemplate(html, readyState));
      }
    );
  }
);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));