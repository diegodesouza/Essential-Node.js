//binds the application to the set of sample data
var app = require('../../app'),
  flights = require('../data');

module.exports = app(flights);
