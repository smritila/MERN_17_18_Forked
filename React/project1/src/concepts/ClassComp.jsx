// step1: import React library
// step2: import Component class from React
// step3: create a js class with  render() which returns 1 jsx
// Class component will extend Component class(inbuilt)

import React, { Component } from "react";

class ClassComp extends Component {
  render() {
    return (
      <div>
        <h1>This is a class component</h1>
      </div>
    );
  }
}
export default ClassComp;
