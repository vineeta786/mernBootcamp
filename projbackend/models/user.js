var mongoose = require("mongoose");
var schema = mongoose.Schema;
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new schema(
  {
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
  },
  //used as a filter
  { timestamps: true }
);
userSchema
  .virtual("password")
  .set(function () {
    //private variable
    this._password = password;
    //populate salt
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    //take the fields back
    return this._password;
  });
userSchema.method = {
  authenticate: {
    function(plainpassword) {
      //matching the password
      return this.securePassword(plainpassword) === this.encry_password;
    },
  },
  securePassword: function (plainpassword) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha56", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
