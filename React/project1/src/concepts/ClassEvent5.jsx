import React, { Component } from "react";

class ClassEvent5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ronnie",
      age: 25,
      proffession: "student",
    };
  }
  handleClick = () => {
    // binded lexically; need not use bind()
    this.setState({
      name: "Leon",
      age: 26,
      proffession: "Engg",
    });
  };
  render() {
    return (
      <div>
        <h1>
          My name is {this.state.name} and I am {this.state.age} years old and I
          am a {this.state.proffession}
        </h1>
        <button onClick={this.handleClick}>Change Values</button>
      </div>
    );
  }
}

export default ClassEvent5;
