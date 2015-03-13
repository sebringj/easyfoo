var mongoose = require('mongoose'),
	config = require('config');
mongoose.connect(config.mongodb);
mongoose.connection.on('error', console.error.bind(console, 'mongo connection error:'));
mongoose.connection.once('open', function() { console.log('mongo connection opened'); });
module.exports = mongoose;
