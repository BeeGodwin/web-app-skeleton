import rms from './app/clients/rms';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app/App.jsx';

const query = rms.programme().pid('p088s3d2');

rms.get(query).then(({body}) => console.log(body), err => console.log(err));

ReactDOM.render(<App />, document.getElementById('root'));
