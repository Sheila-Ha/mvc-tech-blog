const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


// Import the connection object
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// APP/Port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up handlebars.js engine, inform EXPress.js on which template engine to use
const hbs = exphbs.create({ helpers });

// Session
const sess = {
  secret: 'process.env.DB_SECRET',
  cookie: {
    maxAge: 300000, // 5 minutes
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform EXPress.js on which template engine to use
app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Turn on the connection to the db and server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now Listening'));
});