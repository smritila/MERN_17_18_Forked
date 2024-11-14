// union in typescript
var myVar;
myVar = 10; // number
console.log("variable storing a number: " + myVar);
myVar = "Hello"; // string
console.log("variable storing a string: " + myVar);
var obj1 = {
    // contains the attributes of Person and Employee
    name: "John",
    age: 30,
    employeeId: 123,
    salary: 5000,
};
for (var p in obj1) {
    console.log(obj1[p]);
}
