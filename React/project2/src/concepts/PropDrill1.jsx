import React from "react";
import PropDrill2 from "./PropDrill2";

function PropDrill1(props) {
  console.log(props);
  return (
    <div>
      <h1>I am Prop Drill 1 comp, displaying data from app</h1>
      <p>I am busy, now cannot display data</p>
      <PropDrill2 name={props.student.name} age={props.student.age} />
    </div>
  );
}

export default PropDrill1;
