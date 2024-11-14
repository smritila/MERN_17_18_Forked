// union in typescript

let myVar: number | string;

myVar = 10; // number
console.log("variable storing a number: " + myVar);

myVar = "Hello"; // string
console.log("variable storing a string: " + myVar);

// intersection in typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  salary: number;
}

type worker = Person & Employee;

let obj1: worker = {
  // contains the attributes of Person and Employee
  name: "John",
  age: 30,
  employeeId: 123,
  salary: 5000,
};
for (let p in obj1) {
  console.log(obj1[p]);
}
