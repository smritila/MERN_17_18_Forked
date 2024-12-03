const express = require("express");
const app = express();

function m1(req, res, next) {
  console.log(req.params.id);
  console.log("middle 1");
  next();
}

function m2(req, res, next) {
  console.log(req.params.id);
  console.log("middle 2");
  next();
}
app.use(m1, m2);
app.get("/:id", m1, m2, (req, res) => {
  res.json({ message: "route 1", id: req.params.id });
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
