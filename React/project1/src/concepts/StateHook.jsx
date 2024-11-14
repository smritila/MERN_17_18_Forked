// useState() is a hook function which provides two attributes
// 1. state variable and
// 2. function to update the state var
// Syntax
// const [count, setCount] = useState(0);
// count = state variable
// setCount = function to update the state variable

import React, { useState } from "react";

function StateHook() {
  // Declare a new state variable, which we'll call "color"
  const [color, setColor] = useState("red");

  function changeColor() {
    setColor("purple");
  }
  return (
    <div>
      <h1>My favorite color is: {color}</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default StateHook;
