const Sequelize = require('sequelize');

const sequelize = new Sequelize('web-store', 'root', 'password', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;