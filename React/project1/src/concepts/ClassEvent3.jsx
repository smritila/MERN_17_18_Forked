import React, { Component } from "react";

class ClassEvent3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Ricky Ponting",
      name2: "Sachin Tendulkar",
      toggle: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  render() {
    return this.state.toggle ? (
      <div>
        <h1>{this.state.name1}</h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    ) : (
      <div>
        <h1>{this.state.name2}</h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

export default ClassEvent3;
