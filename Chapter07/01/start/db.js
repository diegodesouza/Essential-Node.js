var mongoose = require('mongoose');

// running the database from mongolab
mongoose.connect('mongodb://flight:flight@ds061741.mongolab.com:61741/flights');

module.exports = mongoose.connection;
