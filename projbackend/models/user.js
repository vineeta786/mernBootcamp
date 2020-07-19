var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = new schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
  },
  email: {
    type: String,
    maxlength: 50,
    trim: true,
    required: true,
    unique: true,
  },
  userinfo: {
    type: String,
    trim: true,
  },
  salt: String,

  encry_password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  purchases: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
