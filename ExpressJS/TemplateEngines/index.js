const express = require("express");
const app = express();

const port = 8000;

// configure ejs
app.set("view engine", "ejs");
// configure views path
app.set("views", "./views");

// configure public folder
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "EJS intro",
    name: "Smritikana",
  });
});

app.listen(port, () => {
  console.log("server running on ", port);
});

/**
 * Task
 * Change the title & name in the index.ejs file by reading the values from query params
 * Ex - If URL is - http://localhost:8000/?name=Richie&Title=Templating
 * Then the title and name should be "Templating" and "Richie" in the webpage respectively
 * Only use Google!!
 */
