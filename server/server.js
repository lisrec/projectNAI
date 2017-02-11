const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', require('./routers/api'));

app.listen(8081, function() {
    console.log('Server started on port 8081.');
})