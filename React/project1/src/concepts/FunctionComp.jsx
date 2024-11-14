// step1: import React library
// step2: create a js function ; name of function = file name
// step3: export the function from current file so that it can be imported in app.js

import React from "react";

function FunctionComp() {
  return (
    <div>
      <h1>This is a function component</h1>
    </div>
  );
}
export default FunctionComp;
