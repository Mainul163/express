const express = require("express");
const handle = require("./handle");
const routerApp = require("./router");
const app = express();
const admin = express();

//***** case sensitive  *** */
app.enable("case sensitive routing");

app.use(express.json());
app.locals.title = "My App";
app.get("/", (req, res) => {
  res.send("this is home page", a);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("this is home page with post request");
});

//app.local

app.get("/app", handle);

//***** sub app or mounthpath *******/

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath); // /admin

  console.log(
    `${new Date(Date.now()).toLocaleString()}-${req.method}-${
      req.originalUrl
    }-${req.protocol}-${req.ip}`
  );
  res.send("Admin Homepage");
});
app.use("/admin", admin);
app.use("/router", routerApp);
//***** sub app or mounthpath end *******/

// ********* middleware ****************

const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()}-${req.method}-${
      req.originalUrl
    }-${req.protocol}-${req.ip}`
  );
  res.end();
};
app.use(logger);

// ****** eror ********

app.use((req, res, next) => {
  next("Requested url was not Found !");
});

app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).res.send(err.massage);
  } else {
    res.status(500).send("there is an error");
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
