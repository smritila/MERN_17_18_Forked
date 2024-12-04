// import fs module
const fs = require("fs");

// write into a file called myfile.txt synchronously
fs.writeFileSync("myfile.txt", "Node JS is writing into the file");

// write into a file called myfile2.txt asynchronously
// fs.writeFile("myfile3.txt", "Writing new data into file", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written successfully");
//   }
// });
// console.log("line after writing");

// append into file synchronously
fs.appendFileSync("myfile3.txt", "\nNode JS is appending into the file\n");
