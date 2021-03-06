const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  return res.send("hello there!!!");
});
//defining the route
const admin = (req, res) => {
  return res.send("this is admin!");
};
// definition of middleware
const isAdmin = (req, res, next) => {
  console.log("isAdmin is running!!");
  next();
};
const isloggedIn = (req, res, next) => {
  console.log("isloggedIn is running!");
  next();
};
// using middleware and route
app.get("/admin", isloggedIn, isAdmin, admin);
app.get("/signup", (req, res) => {
  return res.send("on the signUp page !!!");
});

app.get("/logout", (req, res) => {
  return res.send("on the logout user page !!!");
});

app.listen(port, () => {
  console.log("Server is up and running!!");
});
