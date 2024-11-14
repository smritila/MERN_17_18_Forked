import React from "react";

function ChildComp1({ name, age }) {
  return (
    <div>
      <h2>I am child, rendering data from parent</h2>
      <p>
        {name} and {age}
      </p>
    </div>
  );
}

export default ChildComp1;
