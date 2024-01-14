const express = require('express');
const session = require('express-session');
const passport = require('passport');
// const crypto = require('crypto');
// const databaseConfig = require('./config/database'); // Assuming 'db' was a typo and you meant 'database'
const { sequelize: db } = require('./models'); // Assuming 'db' was a typo and you meant 'database'
const routes = require('./routes/index');
const MySQLStore = require('express-mysql-session')(session);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Determine the environment and load the configuration accordingly
const environment = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[environment];

// Database connection options
const dbOptions = {
    host: config.host,
    port: 3306,
    user: config.username,
    password: config.password,
    database: config.database,
};

// Create a Sequelize instance
const sequelize = db.sequelize;

// Configure the MySQLStore for session management
const sessionStore = new MySQLStore(dbOptions);

// Configure Express to use sessions
app.use(
    session({
        key: "testing",
        secret: '123456789',
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
    })
);

// Further application setup (passport, routes, etc.) can be added here

// Example: Passport configuration
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// Example: Define routes
app.use('/', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} and database  is running on port no 3306`);
});
