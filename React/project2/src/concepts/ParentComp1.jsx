import React from "react";
import ChildComp1 from "./ChildComp1";

function ParentComp1() {
  return (
    <div>
      <h1>I am parent component and I am passing data to child</h1>
      <ChildComp1 name="Rahul" age={25} />
    </div>
  );
}

export default ParentComp1;
