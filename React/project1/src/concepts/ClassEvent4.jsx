import React, { Component } from "react";

class ClassEvent4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // Event handler function
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>I have clicked {this.state.count} times</h1>
        <button onClick={this.incrementCount}>Increase Count</button>
        <button onClick={this.decrementCount}>Decrease Count</button>
      </div>
    );
  }
}

export default ClassEvent4;
