import express from 'express';
import { getProgramme } from './app/clients/rms';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import renderInTemplate from './app/render';
import rootReducer from './app/reducers/rootReducer';
import App from './app/App';

const app = express();
const port = 3000;

// serve client side bundles from static folder
app.use('/dist', express.static('dist'));

// example route
app.get(['/programme/:pid', '/episode/:pid', '/brand/:pid'], 
  (req, res) => {
    const { pid } = req.params;
    let preloadedState = {};
    getProgramme(pid)
      .then(
        ({body}) => {preloadedState = body;},
        err => { res.send(err);}
      ).then(() => {
        const serverSideProps = {
          pid
        };
        const store = createStore(
          rootReducer, 
          preloadedState,
          );
        const html = renderToString(
        <StaticRouter context={{}} location={req.url}>
          <Provider store={store}>
            <App pid={pid} />
          </Provider>
        </StaticRouter>);
        const readyState = store.getState();
        res.send(renderInTemplate(html, readyState, serverSideProps));
      }
    );
  }
);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));