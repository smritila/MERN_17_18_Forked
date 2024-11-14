class Parent {
  House() {
    console.log("Parent builds a house");
  }
}

class Child extends Parent {}

class Child2 extends Parent {}

let child1: Child = new Child();

let child2: Child2 = new Child();

let parent_var: Parent = new Child();
// or
// parent_var: Parent = new Child2();

// beneficial because it provides a genralised container for the child objects
