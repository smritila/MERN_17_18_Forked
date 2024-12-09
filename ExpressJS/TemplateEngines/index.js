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
    name: "Balaji",
  });
});

app.listen(port, () => {
  console.log("server running on ", port);
});
