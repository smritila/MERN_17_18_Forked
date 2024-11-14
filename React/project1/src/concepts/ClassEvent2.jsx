import React, { Component } from "react";

class ClassEvent2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ricky Ponting",
      //   to update the state : setState()
    };
    // bind the function to the object
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "Sachin Tendulkar",
    });
  }
  render() {
    return (
      <div>
        <h1>Hello I am {this.state.name}</h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

export default ClassEvent2;
