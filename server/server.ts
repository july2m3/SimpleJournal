const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());

let data: Array<string>;

app.get('/json/all', (req, res) => {
  if (data) {
    res.json(data);
  } else {
    res.json({ data: 'No data present' });
  }
});

app.get('/', (req, res) => {
  res.send('Not a valid path');
});

app.listen(port);
