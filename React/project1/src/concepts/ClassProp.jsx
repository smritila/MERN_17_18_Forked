import React, { Component } from "react";

class ClassProp extends Component {
  render() {
    return (
      <div>
        <h1>I am a class component, displaying data from app.js</h1>
        <p>Name: {this.props.name}</p>
        <p>Job: {this.props.job}</p>
      </div>
    );
  }
}

export default ClassProp;
