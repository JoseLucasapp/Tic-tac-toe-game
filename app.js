const app = require('./config/server');
let port = process.env.port || 3000;

app.listen(port);