var mongoose = require('mongoose');

mongoose.connect('mongodb://flight:flight@ds061741.mongolab.com:61741/flights');

module.exports = mongoose.connection;
