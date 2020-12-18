const express = require('express');
const consign = require('consign');

const app = express();

app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
.include('app/controllers')
.then('app/routes')
.into(app);

module.exports = app;