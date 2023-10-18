const express = require("express");
const handle = require("./handle");
const app = express();
const admin = express();

//***** case sensitive  *** */
app.enable("case sensitive routing");

app.use(express.json());
app.locals.title = "My App";
app.get("/", (req, res) => {
  res.send("this is home page");
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
  res.send("Admin Homepage");
});
app.use("/admin", admin);

//***** sub app or mounthpath end *******/

app.listen(3000, () => {
  console.log("listening on port 3000");
});
