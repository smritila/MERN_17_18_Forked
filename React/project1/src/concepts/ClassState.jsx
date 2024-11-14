import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sachin",
      occupation: "Cricketer",
    };
  }
  render() {
    return (
      <div>
        <h1>I am a class component with a state</h1>
        <p>
          Hi my name is {this.state.name} and I am a 
          {this.state.occupation}
        </p>
      </div>
    );
  }
}

export default ClassState;
