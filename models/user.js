// require dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

// create user schema
var UserSchema = new Schema({
  email: {type: String, required: true},
  passwordDigest: {type: String, required: true},
  createdAt: {type: Date, required: true}
});

// create user model
var User = mongoose.model('User', UserSchema);

// export user model
module.exports = User;