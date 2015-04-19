var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Loop = new Schema({
	title: { type: String, required: true },
	details: { type: String },
	modified: { type: Date, default: Date.now }
});

Loop.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Loop', Loop);