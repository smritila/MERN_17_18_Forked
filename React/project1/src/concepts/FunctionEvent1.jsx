import React from "react";

function FunctionEvent1() {
  function changeName() {
    let nameElement = document.getElementById("i1");
    nameElement.innerHTML = "John";
  }
  return (
    <div>
      <h1>
        Hello my name is <span id="i1">Rochelle</span>
      </h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default FunctionEvent1;

// hooks
// are functions which allow us to access class component units into functional components
// they are used to manage state in functional components
