// create a readable stream
const fs = require("fs");
const readable = fs.createReadStream("myOutput.txt", { highWaterMark: 2 });
// check for data and display

readable.on("data", (chunk) => {
  console.log(chunk.toString());
});
