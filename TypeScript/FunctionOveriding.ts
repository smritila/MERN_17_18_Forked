// function overriding:
//   - a subclass can provide a different implementation of a function
//      that is already provided by its superclass
//   - the subclass method has the same name, return type, and parameter
//      list as the superclass
//   - the subclass method can access the superclass method using the "super" keyword

class Richie {
  House() {
    console.log("Richie builds a house of red color");
  }
}

class RC extends Richie {
  // Richies child
  House() {
    console.log("Richie's child paints it blue");
  }
  Flat() {
    console.log("Richie's child buys a flat");
  }
}

let rc: RC = new RC();

rc.House();