class Employee {
  static CompanyName = "Ethnus";
  name: string;
  age: number;
  address: string;
  contact: number;
  email: string;

  constructor(name, age, address, contact, email) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.contact = contact;
    this.email = email;
  }

  display() {
    console.log(`Name: ${this.name}, 
        Age: ${this.age}, 
        Address: ${this.address}, 
        contact:${this.contact}
        Email: ${this.email}`);
  }
}

let emp1 = new Employee("Sachin", 24, 
    "Mumbai", 123456789, "sachin@gmail.com");
emp1.display();
console.log("Company name: " + Employee.CompanyName);
