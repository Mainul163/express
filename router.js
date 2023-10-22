const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("Dashboard router");
});

adminRouter.get("/login", (req, res) => {
  res.send("login");
});

adminRouter.param("user", (req, res, next, id) => {
  req.user = id === "1" ? "Admin" : "Anonymous";
  next();
});

adminRouter.get("/:user", (req, res) => {
  res.send(`Hello ${req.user}`);
});

module.exports = adminRouter;
