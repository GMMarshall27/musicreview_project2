const path = require('path');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const db = require('./models/user');
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const router = require('./api/index');
const session = require('express-session');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

 app.get('/', (req, res) => { 	res.render('index');
 });

app.get('/login', (req, res) => {
	res.render('login');
});

 app.get('/signup', (req, res) => {
 	res.render('signup');
 });

 app.get('/reviews', (req, res) => {
 	res.render('reviews');
 });

 app.get('/new-post', (req, res) => {
 	res.render('new-post');
 });

 app.use(require('./controllers/'));


sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Server is starting at ', PORT));
});
