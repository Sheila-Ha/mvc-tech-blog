const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');



// Import the connection object
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// APP/Port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up handlebars.js engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');

// Session
const sess = {
  secret: 'process.env.DB_SECRET',
  cookie: {};
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(_dirname, 'public')));

// Routes
app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now Listening'));
});