// DEPENDENCIES
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 9999;


// Set up Handlebars.js engine
const hbs = exphbs.create({});

// Create session
const sess = {
  secret: 'Super secret session',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets up express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// Logging DB info
console.log(`Database name: ${sequelize.config.database} \n running on port: ${sequelize.config.port} \n under hostname: ${sequelize.config.host}`);


// Listener. Ths effectively 'starts' our server
app.listen(PORT, () => {
    console.log(`Node Server running on port: ${PORT}`);
});