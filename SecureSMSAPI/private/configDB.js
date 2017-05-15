var mongoose = require('mongoose');
mongoose.connect('mongodb://<login>:<password>@<url>:<port>/<db>/');
module.exports = mongoose;
