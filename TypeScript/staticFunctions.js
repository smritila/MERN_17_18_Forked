var Employee = /** @class */ (function () {
    function Employee(name, age, address, contact, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.contact = contact;
        this.email = email;
    }
    Employee.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", \n        Address: ").concat(this.address, ", contact:").concat(this.contact, "\n        Email: ").concat(this.email));
    };
    Employee.CompanyName = "Ethnus";
    return Employee;
}());
var emp1 = new Employee("Sachin", 24, "Mumbai", 123456789, "sachin@gmail.com");
emp1.display();
console.log("Company name: " + Employee.CompanyName);
