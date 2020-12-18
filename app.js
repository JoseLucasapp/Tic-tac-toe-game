const app = require('./config/server');

const {PORT = 3000} = process.env;

app.listen(PORT);