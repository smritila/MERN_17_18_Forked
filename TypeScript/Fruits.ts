class Fruits {
  // generalised class
  fruitName() {} //abstract function
  fruitColor() {}
}

class Apple extends Fruits {
  fruitName(): void {
    console.log("Apple");
  }
  fruitColor(): void {
    console.log("Red");
  }
  fruitOrigin(): void {
    console.log("USA");
  }
}

class Banana extends Fruits {
  fruitName(): void {
    console.log("Banana");
  }
  fruitColor(): void {
    console.log("Yellow");
  }
  fruitOrigin(): void {
    console.log("India");
  }
}

// let basket1: Apple = new Apple();
//creating a basket which can store only apples

let bigBasket: Fruits = new Apple();
// or
// bigBasket = new Banana();

bigBasket.fruitName();
bigBasket.fruitColor();
// bigBasket.fruitOrigin(); child member properties not
// accessible
// when objects is upcasted, cannot access child members

// downcast: converting the upcasted
// variable to its child object

let smallbasket = bigBasket as Apple;
// syntax: var_name = upcastedvar as Child_class

smallbasket.fruitName();
smallbasket.fruitColor();
smallbasket.fruitOrigin();

// abstraction
// encapsulation

// intersection and union