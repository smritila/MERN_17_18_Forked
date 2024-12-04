const http = require("http");
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
const server = http.createServer((request, response) => {
  response.write("Hello from server");
  response.end();
});

// listen on port 8000
const PORT = 8000;
server.listen(8000, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}/`);
});
