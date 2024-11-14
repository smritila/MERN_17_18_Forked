class Father {
  house() {
    console.log("Father has a red house");
  }
}

class Son extends Father {
  house() {
    console.log("Son changes the house to blue house");
  }
  flat() {
    console.log("Son has a flat");
  }
}

let son: Son = new Son();
son.house();

let f: Father = new Son();
let s: Son = f as Son;
