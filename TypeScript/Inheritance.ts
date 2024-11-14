// acquring the properties of super class to the sub class
// it is done using extends keyword

class Vehicle {
  color;
  brand;
  model;
  price;
}

class Bike extends Vehicle {
  // the properties of Vehicle is inherited
//    by bike class
  wheels;
}

// create a Bike type variable and store the Bike object in it
let bike1: Bike = new Bike();
bike1.color = "red";
bike1.brand = "honda";
bike1.model = "CBR";
bike1.price = 10000000;
bike1.wheels = 2;

console.log(bike1.color);
console.log(bike1.brand);
console.log(bike1.model);
console.log(bike1.price);
console.log(bike1.wheels);
