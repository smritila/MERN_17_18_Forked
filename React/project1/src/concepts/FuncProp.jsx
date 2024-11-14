import React from "react";

function FuncProp(props) {
  return (
    <div>
      <h2>I am displaying the data I got from app.js</h2>
      <h3>Name = {props.name}</h3>
      <h3>Job = {props.duty}</h3>
    </div>
  );
}

export default FuncProp;
