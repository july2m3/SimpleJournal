var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.port || 5000;
app.use(bodyParser.json());
var data;
app.get('/json/all', function (req, res) {
    if (data) {
        res.json(data);
    }
    else {
        res.json({ data: 'No data present' });
    }
});
app.get('/', function (req, res) {
    res.send('Not a valid path');
});
app.listen(port);
