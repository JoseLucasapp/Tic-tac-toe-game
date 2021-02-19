const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views/')

module.exports = app;