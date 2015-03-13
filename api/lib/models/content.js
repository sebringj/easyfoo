var mongoose = require('../utils/mongoose');

var schema = new mongoose.Schema({
	account: {type : mongoose.Schema.Types.ObjectId, ref : 'Account'},
	clientId: String,
	created: Date,
	updated: Date,
	versions: [{
		data: mongoose.Schema.Types.Mixed,
		created: Date,
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		batchFrom: Date,
		batchTo: Date
	}],
	inBatch: Boolean
});
userSchema.index({account: 1, clientId: 1});

module.exports = mongoose.model('Content', schema);
