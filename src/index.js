// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../src/app/App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));