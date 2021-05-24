// DEPENDENCIES
const express = require('express');
const sequelize = require('./config/connection');

// EXPRESS CONFIGURATION
// tells node that we are creating an express server
const app = express();  

// sets an initial port.
const PORT = process.env.PORT || 9999;

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listener. Ths effectively 'starts' our server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})