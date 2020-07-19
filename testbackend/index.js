const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  return res.send("hello there!!!");
});

app.get("/signup", (req, res) => {
  return res.send("on the signUp page !!!");
});

app.get("/logout", (req, res) => {
  return res.send("on the logout user page !!!");
});

app.listen(port, () => {
  console.log("Server is up and running!!");
});
