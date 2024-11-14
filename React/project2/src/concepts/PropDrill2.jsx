import React from "react";

function PropDrill2(props) {
  console.log(props);
  return (
    <div>
      <h1>Name given 
        from propsDrill 1 is :
         {props.name}</h1>
      <h1>Age given from propsDrill 1 is : {props.age}</h1>
    </div>
  );
}

export default PropDrill2;
