const path = require('path');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, () => {
    console.log('Server is starting at port', 3001);
});