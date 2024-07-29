const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'   // set the default mongodb url followed by database name 'hotels'.

// Setup MongoDB connection
mongoose.connect(mongoURL);

// Get the default connection
// Mongoose mantains a default connection object representing the MongoDb connection.
const db = mongoose.connection;

// Define Event Listeners on Connection object
// 1. Connected
db.on('connected', () => {
  console.log('Connected to MongoDb Server');
});

// 2. Error
db.on('error', (err) => {
  console.log('MongoDb Connection error: ', err);
});

// 3. Disconnection
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;