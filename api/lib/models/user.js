var mongoose = require('../utils/mongoose');

var schema = new mongoose.Schema({
	email: String,
	provider: String,
	salt: String,
	hashPassword: String,
	created: Date,
	updated: Date,
	lastLoggedIn: Date
});

module.exports = mongoose.model('User', schema);
