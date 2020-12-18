const express = require('express');

const app = express();

app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.get('/',(req,res)=>{
	res.render('index');
});
app.listen(3000);