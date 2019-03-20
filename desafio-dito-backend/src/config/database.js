const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://testdito:testdito123@ds117806.mlab.com:17806/api-dito", {useNewUrlParser: true});