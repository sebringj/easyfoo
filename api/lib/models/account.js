var mongoose = require('../utils/mongoose');

var schema = new mongoose.Schema({
	name: String,
	created: Date,
	users: [{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Account'
		},
		added: Date,
		role: String
	}]
});

module.exports = mongoose.model('Account', schema);
