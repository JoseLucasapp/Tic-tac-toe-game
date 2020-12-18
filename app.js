const app = require('./config/server');

const {PORT = 3000} = process.env;

app.listen(PORT);
let port = process.env.PORT || 3000;

app.listen(port);