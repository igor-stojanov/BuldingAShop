// --- MySQL ---

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('web-store', 'root', 'password', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

// --- MySQL ---

const mongodb = require('mongodb');
const { get } = require('../routes/admin');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callabck => { // connecting to the mongoDB
  MongoClient.connect('mongodb+srv://igorstojanov:ballantines1827@cluster.fwpzewt.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    _db = client.db;
    callabck();
  })
  .catch(err => {
    console.log(err) 
    throw err;
  }); 
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
