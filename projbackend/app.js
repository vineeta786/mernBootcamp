const mongoose = require("mongoose");
const express = require("express");
const app = express();

//middleware:
// body-parser
// cookie-prser
// cors- used to link frontend and backend
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(console.log("Not connected!"));
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
