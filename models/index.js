const { Sequelize ,DataTypes } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('authatication_demo', 'root', 'somin_@123', {
    host: 'localhost',
    logging : false,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

// db.contact = require('./contacts')(sequelize ,DataTypes);
db.users = require('./user')(sequelize, DataTypes);
db.sequelize.sync({ force : false});
module.exports = db