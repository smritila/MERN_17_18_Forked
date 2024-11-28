// create a write stream
const fs = require("fs");
const writeable = fs.createWriteStream("myOutput.txt");

// write into a file using writeable

writeable.write("Hello, world! I am data inserted using streams");

// check whether writing is finished
writeable.end(() => {
  console.log("Writing is finished");
});
// check for error

writeable.on("error", (err) => {
  console.log("error occured when writing to file");
});
