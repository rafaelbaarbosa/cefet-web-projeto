var mongoose = require('mongoose'),
    db = require('../config/db');

var Schema = mongoose.Schema;

var championshipSchema =  new Schema({
  name: {type: String, required: true, unique: true},
  n_participants: Number,
  completed: Number,
  admin: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}); 

championshipSchema.pre('findOne', function(next) {
  this.populate('user');
  next();
});

var Championship = mongoose.model('Championship', championshipSchema);

module.exports = Championship;