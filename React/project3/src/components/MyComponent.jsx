import React, { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();
    console.log("This is constructor");
  }
  componentDidMount() {
    console.log("Component did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }
  render() {
    console.log("render function");
    return (
      <div>
        <h1>My Component</h1>
      </div>
    );
  }
}

export default MyComponent;
