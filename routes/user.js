var mongoose = require('mongoose'),
    db = require('../config/db');

var Schema = mongoose.Schema;

var userSchema =  new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  date_birth: Date,
  email: String

}); 

var User = mongoose.model('User', userSchema);

module.exports = User;
