const handle = (req, res) => {
  console.log(req.app.locals.title);
  res.send("this is app local ");
};

module.exports = handle;
