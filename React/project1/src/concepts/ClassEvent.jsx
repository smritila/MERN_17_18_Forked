import React, { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    document.getElementById("i1").innerHTML = "Content changed";
  }

  render() {
    return (
      <div>
        <h1>Event handling in Class Component</h1>
        <h2 id="i1">I change the content on click</h2>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default ClassEvent;
