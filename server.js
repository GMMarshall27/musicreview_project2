const path = require('path');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const db = require('./models/user');
const PORT = process.env.PORT || 5001;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


db.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Server is starting at ', PORT));
  });