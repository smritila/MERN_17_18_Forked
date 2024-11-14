class Vehicle1 {
  color;
  brand;
  model;
  price;
  constructor(color, brand, model, price) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

class Bike1 extends Vehicle1 {
  wheels;
  constructor(color, brand, model, price, wheels) {
    super(color, brand, model, price);
    this.wheels = wheels;
  }
  display() {
    console.log(this.color);
    console.log(this.brand);
    console.log(this.model);
    console.log(this.price);
    console.log(this.wheels);
  }
}

let b1: Bike1 = new Bike1("Red", "Honda", "CBR", 10000000, 2);
b1.display();

// upcasting
let par_var: Vehicle1 = new Bike1("Red", "Honda", "CBR", 10000000, 2);

console.log(par_var.brand);
console.log(par_var.color);
console.log(par_var.model);
console.log(par_var.price);
// console.log(par_var.wheels); child class members cannot be accessed using upcasting
