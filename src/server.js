const express = require('express');

const app = express();
const port = 3000;

app.get('/path', (req, res) => res.send('This is a route'));

app.use(express.static('dist'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));