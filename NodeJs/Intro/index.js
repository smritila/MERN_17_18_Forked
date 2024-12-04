// import calculator.js
const calcFunc = require("./mymodules/calculator");
// import prebuilt modules
const fs = require("fs"); //file system
// console.log(fs);
console.log(calcFunc);
calcFunc.add(12, 15);
calcFunc.sub(20, 15);
calcFunc.mul(30, 15);

// reading a file using fs module
const fileData = fs.readFileSync("./mymodules/MyFile.txt", "utf-8");
console.log(fileData);
