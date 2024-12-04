const express = require("express");
const app = express();
const middleFuncs = require("./middlewares/middfuncs");
const { middleOne, checkAge } = middleFuncs;

app.get("/api1", middleOne, (req, res) => {
  // actual response
  res.json({ message: "Hello from API 1" });
});

app.get("/checkAge/:age", checkAge, (req, res) => {
  // actual response
  res.json({
    message: `Welcome to vote, you are ${req.params.age} years of age`,
  });
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
