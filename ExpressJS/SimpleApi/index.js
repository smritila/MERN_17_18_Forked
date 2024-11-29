// create a simple expressjs server
// import express
// instantiate express
// create a simple route to handle to request
const express = require("express");
const app = express();
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(cors());
app.get("/sachin", (req, res) => {
  res.send("Sachin is the best");
});
// simple api to send student data to html page
app.get("/students", (req, res) => {
  const students = [
    { id: 1, name: "Sachin", age: 25 },
    { id: 2, name: "Rahul", age: 30 },
    { id: 3, name: "Saurav", age: 35 },
    { id: 4, name: "Kohli", age: 35 },
  ];
  res.json(students);
});
// start the server
app.listen(8000, () => {
  console.log("Server is running on port http://localhost:8000");
});
