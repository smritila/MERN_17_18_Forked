// import fs module
const fs = require("fs");
//write into a file called myfile.txt synchronously
fs.writeFileSync("myfile.txt", "Node js is writing into the file");

// write into a file called myfile2.txt asynchronously
// fs.writeFile(
//   "myfile3.txt",
//   "Node js is writing into the file asynchronousy",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file written successfully");
//     }
//   }
// );
// console.log("line after writing");
fs.appendFileSync("myfile3.txt", "\nNode js is appending into the file");
