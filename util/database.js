// --- MySQL ---

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('web-store', 'root', 'password', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

// --- MySQL ---

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callabck => {
  MongoClient.connect('mongodb+srv://igorstojanov:ballantines1827@cluster.fwpzewt.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    callabck(client);
  })
  .catch(err => console.log(err)); // connecting to the mongoDB
}

module.exports = mongoConnect;
