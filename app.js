const app = require('./config/server');

require('./app/routes/index')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT);