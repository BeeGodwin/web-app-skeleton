const express = require('express');
const RMSClient = require('@bbc/rms-client');

const app = express();
const port = 3000;

const rmsClient = RMSClient.createClient({
  apiKey: process.env.RMS_CLIENT_API_KEY
});

app.get('/rms', (req, res) => {
  const query = rmsClient.v2ProgrammePlayable().pid('p088s3d2');

  rmsClient.get(query)
  .then(
    ({body, headers, statusCode}) => {res.send(body);},
    err => { res.send(err);});
  // res.send('This is a route');
});

app.use(express.static('dist'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));