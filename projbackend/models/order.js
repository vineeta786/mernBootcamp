const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var schema = mongoose.Schema;

const ProductCartSchema = new schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const OrderSchema = new schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
      type: Number,
    },
    address: String,
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
