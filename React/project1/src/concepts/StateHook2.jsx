import React, { useState } from "react";

function StateHook2() {
  const [name, setName] = useState("Balaji");
  const [age, setAge] = useState(25);
  const [prof, setProf] = useState("student");

  function updateStates() {
    setName("Raj");
    setAge(30);
    setProf("Doctor");
  }
  return (
    <div>
      <h1>
        My name is {name} and my age is {age} and I am {prof}
      </h1>
      <button onClick={updateStates}>Update States</button>
    </div>
  );
}

export default StateHook2;
