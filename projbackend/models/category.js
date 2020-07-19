const mongoose = require(mongoose);
var schema = mongoose.schema;

const categorySchema = new schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  //records time created in the database
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
