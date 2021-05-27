// DEPENDENCIES
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');


// HANDLEBARS configuration
// set up Handlebars.js engine
const hbs = exphbs.create({});

// EXPRESS CONFIGURATION
// tells node that we are creating an express server
const app = express();  

// sets an initial port.
const PORT = process.env.PORT || 9999;

// inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/homeRoutes'));


// tells app what routes to use
app.use(routes);

// Logging DB info
console.log(`Database name: ${sequelize.config.database} \n running on port: ${sequelize.config.port} \n under hostname: ${sequelize.config.host}`)


// Listener. Ths effectively 'starts' our server
app.listen(PORT, () => {
    console.log(`Node Server running on port: ${PORT}`);
})