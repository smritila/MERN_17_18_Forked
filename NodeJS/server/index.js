const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// import mongoose
const mongoose = require("mongoose");

// connect to database
const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/TicketBooking");
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};
// create a server
const server = http.createServer((req, res) => {
  // response.write("Hello from server");
  // response.end();
  // Parse the URL and query parameters
  const parsedUrl = url.parse(req.url, true);
  const queryParams = parsedUrl.query;

  if (req.method === "GET") {
    const name = queryParams.name || "Smriti"; // Default to 'Server' if no name is provided

    // Read the index.html file
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      // Replace a placeholder with the name query parameter
      const updatedContent = data.replace("{{ name }}", name);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(updatedContent);
    });
  }
});

// listen on port 8000
const PORT = 8000;
server.listen(8000, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}/`);
});
