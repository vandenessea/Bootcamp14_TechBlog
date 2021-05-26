// DEPENDENCIES
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');


// EXPRESS CONFIGURATION
// tells node that we are creating an express server
const app = express();  

// sets an initial port.
const PORT = process.env.PORT || 9999;

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging DB info
console.log(`Database name: ${sequelize.config.database} \n running on port: ${sequelize.config.port} \n under hostname: ${sequelize.config.host}`)

// tells app what routes to use
app.use(routes);

// Listener. Ths effectively 'starts' our server
app.listen(PORT, () => {
    console.log(`Node Server running on port: ${PORT}`);
})