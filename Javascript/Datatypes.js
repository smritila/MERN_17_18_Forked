let myAge = 20;
document.write("myage type: " + typeof myAge + "<br>");
let myWeight = 40.45;
document.write("myweight type: " + typeof myWeight + "<br>");
let myname = "Dinesh";
document.write("myname type: " + typeof myname + "<br>");
let mystatus = true;
document.write("mystatus type: " + typeof mystatus + "<br>");
let gender = "m";
document.write("gender type: " + typeof gender + "<br>");

let person = {
  // js object: it is used to store multiple values in a single variable
  name: "Dinesh",
  age: 20,
  occupation: "Singer",
  isMarried: false,
  address: "Bangalore",
};

document.write("person type: " + typeof person + "<br>");

let mynumber = 100;
let mynumber2 = "100";
document.write(mynumber == mynumber2);
document.write("<br>")
document.write("using === " + mynumber === mynumber2);
