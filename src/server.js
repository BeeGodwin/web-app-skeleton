const express = require('express');
const RMSClient = require('@bbc/rms-client');

const app = express();
const port = 3000;

const rmsClient = RMSClient.createClient({
  apiKey: process.env.RMS_CLIENT_API_KEY
});

app.get('/programme/:pid', (req, res) => {
  const query = rmsClient.v2ProgrammePlayable().pid(req.params.pid);

  rmsClient.get(query)
  .then(
    ({body}) => {res.send(body);},
    err => { res.send(err);});
});

app.use(express.static('dist'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));